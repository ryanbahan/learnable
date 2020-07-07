import CollectionsContainer from '../../src/components/CollectionsContainer/CollectionsContainer'
import Head from 'next/head';
import styled from 'styled-components';
import { useSession } from 'next-auth/client'
import CollectionProvider from '../../src/contexts/collectionContext'
import Collection from '../../src/components/Collection/Collection';

export default function App(props) {
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
        <CollectionProvider>
          <CollectionsContainer />
        </CollectionProvider>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;
