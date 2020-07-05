import { Div, Span } from './styles'

const calculatePercentComplete = (arr) => {
  if (arr.length) {
    const completedItems = arr.filter((item) => item.is_complete === true);
    return ((completedItems.length / arr.length) * 100).toFixed();
  }
  return 0;
};

const PlaylistTitle = ({ title, playlistItems }) => (
  <Div>
    {`${calculatePercentComplete(playlistItems)}%`}
    <Span>{title}</Span>
  </Div>
);

export default PlaylistTitle;
