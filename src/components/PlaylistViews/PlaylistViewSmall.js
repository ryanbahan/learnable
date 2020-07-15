import { childVariants } from './PlaylistViewSmallAnimations'
import { Div } from "./PlaylistViewSmallStyles";
// import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
// import ProgressBar from '../ProgressBar/ProgressBar';
// import DueDate from '../DueDate/DueDate';
import PlaylistDropdown from '../PlaylistDropdown/PlaylistDropdown';

const PlaylistView2 = ({ due_date, id, playlist_items, title }) => {
  if (!playlist_items) {
    playlist_items = [];
  }

  return (
    <Div variants={childVariants} whileHover={{ scale: 1.02 }}>
      <PlaylistDropdown playlistId={id} />
    </Div>
  );
};

export default PlaylistView2;
