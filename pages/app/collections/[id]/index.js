import AppNav from '../../../../src/components/AppNav/AppNav'
import Head from 'next/head';
import styled from 'styled-components';
import PlaylistProvider from '../../../../src/contexts/playlistContext';
import PlaylistsContainer from '../../../../src/components/PlaylistsContainer/PlaylistsContainer';

export default function App() {

    return (
        <>
            <Head>
                <title>Learnable</title>
            </Head>
            <PlaylistProvider>
                <MainWrapper>
                    <AppNav />
                    <PlaylistsContainer />
                </MainWrapper>
            </PlaylistProvider>
        </>
    );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
