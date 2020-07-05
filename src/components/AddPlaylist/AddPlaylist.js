import { Wrapper, Button } from './styles'
import { variants } from './animations'
import { useContext } from 'react';
import { PlaylistContext } from '../../contexts/playlistContext';

const AddPlaylist = () => {
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;
  // let isDisabled = false;

  // if (playlists.length) {
  //   isDisabled = !playlists[playlists.length - 1].id;
  //   // console.log('t', !playlists[playlists.length - 1].id)
  // }
  
  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() =>
          playlistContext.addPlaylist({
            id: null,
            title: '',
            user_id: 1,
            status: 'valid',
            due_date: '',
            playlist_items: [],
          })
        }
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        Add Playlist
      </Button>
    </Wrapper>
  );
};

export default AddPlaylist;
