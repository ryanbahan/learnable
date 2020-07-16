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
  console.log(playlist_items, 'ITEMS')
  const playlistContext = useContext(PlaylistContext);
  const isNewPlaylist = (id) => (id ? 2 : 1);
  const [step, setStep] = useState(isNewPlaylist(id));
  const [playlistTitle, setPlaylistTitle] = useState(title);
  const [playlistDate, setPlaylistDate] = useState(
    due_date || moment().format('MM/DD/YYYY')
  );

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
  })

  const nextStep = () => {
    if (step > 3) {
      setStep(3);
      return;
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    const newPlaylistItem = {
      playlist_id: state.id,
      title: state.newItemTitle,
      category: state.category,
      url: state.newItemLink,
      is_complete: false,
    };

    await playlistContext.postPlaylistItem(newPlaylistItem);
    await update({ ...state, newItemLink: '', newItemTitle: '', category: null })
    prevStep();
  };

  const switchViews = () => {
    switch (step) {
      case 1:
        return (
          <PlaylistView1
            onChangeHandler={setPlaylistTitle}
            playlistDate={playlistDate}
            setPlaylistDate={setPlaylistDate}
            title={playlistTitle}
            state={state}
            update={update}
          />
        );
      case 2:
        return (
          <PlaylistView2
            nextStep={nextStep}
            state={state}
            update={update}
          />
        );
      case 3:
        return (
          <PlaylistView3
            handleSubmit={handleSubmit}
            prevStep={prevStep}
            state={state}
            update={update}
          />
        );
      default:
        return (
          <PlaylistView2
            nextStep={nextStep}
            state={state}
            update={update}
          />
        );
    }
  };

  return (
    <Section variants={childVariants} whileHover={{ scale: 1.02 }}>
      {switchViews(step)}
    </Section>
  );
};

export default Playlist;
