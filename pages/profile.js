import Head from 'next/head';
import styled from 'styled-components';
import Profile from '../src/components/Profile/Profile'
import PrivateRoute from '../src/hocs/PrivateRoute'

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
                <PrivateRoute path="/profile" component={Profile} />
            </MainWrapper>
        </>
    );
}
