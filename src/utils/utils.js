export const sortPlaylistItems = (playlistItems) => {
  return playlistItems.sort((a, b) => a.id - b.id);
}

export const calculatePercentComplete = (arr) => {
  if (arr.length) {
    const completedItems = arr.filter((item) => item.is_complete === true);
    return ((completedItems.length / arr.length) * 100).toFixed();
  }
  return 0;
}
