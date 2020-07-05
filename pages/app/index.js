import Header from '../../src/components/Header/Header'
import Head from 'next/head';
import styled from 'styled-components';

export default function App() {

  return (
    <>
      <Head>
        <title>Learnable</title>
      </Head>
      <Header />
      <MainWrapper>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
`;
