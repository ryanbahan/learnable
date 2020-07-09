import CollectionsContainer from '../../src/components/CollectionsContainer/CollectionsContainer'
import Head from 'next/head';
import styled from 'styled-components';
import { useSession, getSession } from 'next-auth/client'
import CollectionProvider from '../../src/contexts/collectionContext'

export default function App({ collections }) {
  const [session, loading] = useSession()
  
  if (loading) {
    return <></>
  }

  return (
    <>
      <Head>
        <title>Learnable</title>
      </Head>
      <MainWrapper>
        <CollectionProvider collections={ collections } >
          <CollectionsContainer />
        </CollectionProvider>
      </MainWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const base = process.env.baseAPIURL[process.env.type];
  const session = await getSession(context)

  if (session) {
    const res = await fetch(`${base}/collections/${session.user.id}`)
    const json = await res.json()
    const collections = json.data

    return {
      props: { collections }, // will be passed to the page component as props
    }
  } else {
    const { res } = context;
    const base = process.env.baseURL[process.env.type];
    res.setHeader("location", `${base}/api/auth/signin`);
    res.statusCode = 302;
    res.end();
    return;
  }
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;
