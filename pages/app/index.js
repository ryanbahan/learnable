import Header from '../../src/components/Header/Header'
import CollectionsContainer from '../../src/components/CollectionsContainer/CollectionsContainer'
import Head from 'next/head';
import styled from 'styled-components';
import { useSession } from 'next-auth/client'

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
        <CollectionsContainer />
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
