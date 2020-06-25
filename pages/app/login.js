import Head from 'next/head';
import styled from 'styled-components';
import Login from '../../src/components/Login/Login'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Learnable</title>
            </Head>
            <MainWrapper>
                <Login />
            </MainWrapper>
        </>
    );
}
