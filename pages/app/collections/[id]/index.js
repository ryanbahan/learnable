import AppNav from '../../../../src/components/AppNav/AppNav'
import Head from 'next/head';
import styled from 'styled-components';
import PlaylistProvider from '../../../../src/contexts/playlistContext';
import PlaylistsContainer from '../../../../src/components/PlaylistsContainer/PlaylistsContainer';

export default function App({ playlists }) {

    return (
        <>
            <Head>
                <title>Learnable</title>
            </Head>
            <PlaylistProvider playlists={ playlists }>
                <MainWrapper>
                    <AppNav />
                    <PlaylistsContainer />
                </MainWrapper>
            </PlaylistProvider>
        </>
    );
}

export async function getServerSideProps(context) {
    const base = process.env.baseAPIURL[process.env.type];
    const res = await fetch(`${base}/playlists/${context.params.id}`)
    const json = await res.json()

    if (json) {
        const playlists = json.data

        return {
            props: { playlists }, // will be passed to the page component as props
        }
    } else {
        const playlists = []

        return {
            props: { playlists }, // will be passed to the page component as props
        } 
    }
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
