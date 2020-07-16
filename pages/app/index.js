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
  
  if (loading || !session) {
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
    return {
      props: { collections: [], auth: false }, // will be passed to the page component as props
    }
  }
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
