import AppNav from '../../../../src/components/AppNav/AppNav'
import Head from 'next/head';
import styled from 'styled-components';
import { getSession } from 'next-auth/client'
import { sortPlaylistItems } from '../../../../src/utils/utils'
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
    const session = await getSession(context)

    if (!session) {
        const { res } = context;
        const base = process.env.baseURL[process.env.type];
        res.setHeader("location", `${base}/api/auth/signin`);
        res.statusCode = 302;
        res.end();
        return;
    }

    const base = process.env.baseAPIURL[process.env.type];
    const res = await fetch(`${base}/playlists/${context.params.id}`)
    const json = await res.json()

    if (json) {
        const playlists = json.data

        const sortedPlaylists = playlists.map(p => {
            p.playlist_items = sortPlaylistItems(p.playlist_items)
            return p
        })

        return {
            props: { playlists: sortedPlaylists }, // will be passed to the page component as props
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
