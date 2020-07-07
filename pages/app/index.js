import CollectionsContainer from '../../src/components/CollectionsContainer/CollectionsContainer'
import Head from 'next/head';
import styled from 'styled-components';
import { useSession, getSession } from 'next-auth/client'
import CollectionProvider from '../../src/contexts/collectionContext'
import fetch from 'node-fetch'

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
  const res = await fetch(`${base}/collections/1`)
  const json = await res.json()
  const collections = json.data

  const session = await getSession(context)

  console.log('session', session)

  return {
    props: { collections }, // will be passed to the page component as props
  }
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;
