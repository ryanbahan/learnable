import { childVariants } from './PlaylistViewSmallAnimations'
import { Div } from "./PlaylistViewSmallStyles";
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import DueDate from '../DueDate/DueDate';
import Dropdown from '../Dropdown/Dropdown';

const PlaylistView2 = ({ due_date, id, playlist_items, title }) => {
  if (!playlist_items) {
    playlist_items = [];
  }

  return (
    <Div variants={childVariants} whileHover={{ scale: 1.02 }}>
      <Dropdown playlistId={id} />
      <PlaylistTitle title={title} playlistItems={playlist_items} />
      <DueDate dueDate={due_date} />
      <ProgressBar playlistItems={playlist_items} />
    </Div>
  );
};

export default PlaylistView2;
