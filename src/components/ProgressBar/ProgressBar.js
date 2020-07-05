import { Bar, PercentComplete } from './styles' 

const calculatePercentComplete = (arr) => {
  if (arr.length) {
    const completedItems = arr.filter((item) => item.is_complete === true);
    return ((completedItems.length / arr.length) * 100).toFixed();
  }
  return 0;
};

const ProgressBar = ({ playlistItems }) => (
  <Bar>
    <PercentComplete
      percentage={`${calculatePercentComplete(playlistItems)}%`}
    />
  </Bar>
);

export default ProgressBar;
