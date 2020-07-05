import { Main } from './styles'
import { parentVariants } from './animations'
import { useContext } from 'react';
import { PlaylistContext } from '../../contexts/playlistContext';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
import Playlist from '../Playlist/Playlist';
import AddPlaylist from '../AddPlaylist/AddPlaylist';
import PlaylistViewSmall from '../PlaylistViews/PlaylistViewSmall';
import { useSession } from 'next-auth/client'

const PlaylistsContainer = () => {
  const [session, loading] = useSession()

  const appSettingsContext = useContext(AppSettingsContext);
  const { archiveView, view } = appSettingsContext.state;
  
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;

  const filteredPlaylists = () =>
    appSettingsContext.state.archiveView
      ? playlists.filter((playlist) => playlist.status === 'archived')
      : playlists.filter((playlist) => playlist.status !== 'archived');

  const renderedPlaylists = filteredPlaylists().map((playlist) => (
    <Playlist key={playlist.id} {...playlist} />
  ));

  const renderedPlaylistsSmall = filteredPlaylists().map((playlist) => (
    <PlaylistViewSmall key={playlist.id} {...playlist} />
  ));

  return (
    <Main
      variants={parentVariants}
      initial="disabled"
      animate={playlists.length ? 'active' : 'disabled'}
      view={view}
      style={
        view === true ? null : { flexWrap: 'wrap', justifyContent: 'center' }
      }
    >
      {view === true ? renderedPlaylists : renderedPlaylistsSmall}
      {session && view === true && !archiveView ? <AddPlaylist /> : null}
    </Main>
  )
};

export default PlaylistsContainer;
