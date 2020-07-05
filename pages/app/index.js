import Header from '../../src/components/Header/Header'
import CollectionsContainer from '../../src/components/CollectionsContainer/CollectionsContainer'
import Head from 'next/head';
import styled from 'styled-components';
import { useSession } from 'next-auth/client'

export default function App() {
  const [session, loading] = useSession()

  if (loading) {
    return <></>
  }

  console.log(session, loading)

  return (
    <>
      <Head>
        <title>Learnable</title>
      </Head>
      <Header />
      <MainWrapper>
        <CollectionsContainer />
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
`;
