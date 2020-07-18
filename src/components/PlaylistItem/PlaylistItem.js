import { P, A } from './styles';
import { useContext } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import Checkbox from '@material-ui/core/Checkbox';
import { PlaylistContext } from '../../contexts/playlistContext';

const icon = {
  video: <YouTubeIcon fontSize="large" style={{ fill: '#c4302b', margin: "1rem" }} />,
  audio: <MicNoneOutlinedIcon fontSize="large" style={{ fill: '#8e44ad', margin: "1rem" }} />,
  article: (
    <DescriptionOutlinedIcon fontSize="large" style={{ fill: '#16a085', margin: "1rem" }} />
  ),
  other: <AirplayIcon fontSize="large" style={{ fill: '#2c3e50', margin: "1rem" }} />,
};

const PlaylistItem = ({
  category,
  id,
  is_complete,
  title,
  playlist_id,
  url,
}) => {
  const playlistContext = useContext(PlaylistContext);

  const handleCheckboxToggle = () => {
    playlistContext.patchPlaylistItem(id, {
      playlist_id,
      title,
      category,
      is_complete: !is_complete,
      url,
      is_favorite: false,
    });
  };

  return (
    <A href={url} whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
      <Checkbox
        inputProps={{ 'aria-label': 'toggle item complete' }}
        checked={is_complete}
        onChange={() => handleCheckboxToggle()}
        name="checkbox"
        color="default"
      />
      <P>{ title }</P>
      { icon[category] }
    </A>
  );
};

export default PlaylistItem;
