import { childVariants } from './animations'
import { Section } from './styles'
import { useContext, useState, useEffect } from 'react';
import moment from 'moment';
import { PlaylistContext } from '../../contexts/playlistContext';
import PlaylistView1 from '../PlaylistViews/PlaylistView1';
import PlaylistView2 from '../PlaylistViews/PlaylistView2';
import PlaylistView3 from '../PlaylistViews/PlaylistView3';

const Playlist = ({
  id,
  due_date,
  playlist_items,
  status,
  title,
}) => {
  const playlistContext = useContext(PlaylistContext);
  const isNewPlaylist = (id) => (id ? 2 : 1);
  
  useEffect(() => {
    update({...state, items: playlist_items});
  }, [playlist_items])
  
  const [state, update] = useState({
    id: id,
    step: isNewPlaylist(id),
    title: title,
    items: playlist_items || [],
    newItemLink: '',
    newItemTitle: '',
    category: null,
    date: due_date || moment().format('MM/DD/YYYY'),
    status: status,
  })

  const handleSubmit = () => {
    const newPlaylistItem = {
      playlist_id: state.id,
      title: state.newItemTitle,
      category: state.category,
      url: state.newItemLink,
      is_complete: false,
    };

    playlistContext.postPlaylistItem(newPlaylistItem);
    update({ ...state, newItemLink: '', newItemTitle: '', category: null, step: 2 })
  };

  const switchViews = () => {
    switch (state.step) {
      case 1:
        return (
          <PlaylistView1
            state={state}
            update={update}
          />
        );
      case 2:
        return (
          <PlaylistView2
            state={state}
            update={update}
          />
        );
      case 3:
        return (
          <PlaylistView3
            handleSubmit={handleSubmit}
            state={state}
            update={update}
          />
        );
      default:
        return (
          <PlaylistView2
            state={state}
            update={update}
          />
        );
    }
  };

  return (
    <Section variants={childVariants} whileHover={{ scale: 1.02 }}>
      {switchViews(state.step)}
    </Section>
  );
};

export default Playlist;
