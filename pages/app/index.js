import CollectionsContainer from '../../src/components/CollectionsContainer/CollectionsContainer'
import Head from 'next/head';
import styled from 'styled-components';
import { useEffect } from 'react'
import { useSession, getSession } from 'next-auth/client'
import CollectionProvider from '../../src/contexts/collectionContext'
import Router from 'next/router'

export default function App({ collections, auth }) {
  const [session, loading] = useSession()

  useEffect(() => {
    if (!auth) {
      return Router.push("/api/auth/signin")
    }
  }, [])
  
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
      props: { collections, auth: true }, // will be passed to the page component as props
    }
  } else {
    console.log(session, 'SESSION')
    return {
      props: { collections: [], auth: false }, // will be passed to the page component as props
    }
    // const base = process.env.baseURL[process.env.type];
    // res.setHeader("location", `http://localhost:8080/api/auth/signin`);
    // res.statusCode = 302;
    // res.end();
    // return;
  }
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;
