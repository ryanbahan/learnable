export const sortPlaylistItems = (playlistItems) => {
  return playlistItems.sort((a, b) => a.id - b.id);
}
