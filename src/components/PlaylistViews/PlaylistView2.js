import { useState } from 'react';
import { Div, NoItemsButton } from './PlaylistView2Styles'
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import NewPlaylistItemBar from '../NewPlaylistItemBar/NewPlaylistItemBar';
import PlaylistHeader from '../PlaylistHeader/PlaylistHeader'

const PlaylistView2 = ({
  dueDate,
  isFavorite,
  nextStep,
  playlistId,
  playlistItems,
  playlistItemURL,
  setPlaylistItemURL,
  setPlaylistItemTitle,
  status,
  title,
}) => {
  const [inputActive, toggleInputActive] = useState(false);

  if (!playlistItems) {
    playlistItems = [];
  }

  const items = playlistItems.map((item) => {
    return <PlaylistItem key={item.id} playlistId={playlistId} {...item} />
  });

  return (
    <>
      <PlaylistHeader 
        playlistId={playlistId}
        title={title} 
        playlistItems={playlistItems}
        dueDate={dueDate}
      />
      <Div>
        <NewPlaylistItemBar
          inputActive={inputActive}
          toggleInputActive={toggleInputActive}
          nextStep={nextStep}
          playlistItemURL={playlistItemURL}
          playlistItems={playlistItems}
          setPlaylistItemTitle={setPlaylistItemTitle}
          setPlaylistItemURL={setPlaylistItemURL}
        />
        {items.length ? (
          items
        ) : (
          <NoItemsButton
            inputActive={inputActive}
            onClick={() => toggleInputActive(!inputActive)}
          >
            You haven't added any items to this list. Click here to get started!
          </NoItemsButton>
        )}
      </Div>
    </>
  );
};

export default PlaylistView2;
