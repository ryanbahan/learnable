import { useState } from 'react';
import { Div, NoItemsButton } from './PlaylistView2Styles'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import DueDate from '../DueDate/DueDate';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import NewPlaylistItemBar from '../NewPlaylistItemBar/NewPlaylistItemBar';
import Dropdown from '../Dropdown/Dropdown';

const PlaylistView2 = ({
  dueDate,
  isFavorite,
  nextStep,
  playlistId,
  playlistItems,
  playlistItemURL,
  setPlaylistItemURL,
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
      <Dropdown
        dueDate={dueDate}
        isFavorite={isFavorite}
        playlistId={playlistId}
        title={title}
      />
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <DueDate dueDate={dueDate} />
      <ProgressBar playlistItems={playlistItems} />
      <Div>
        <NewPlaylistItemBar
          inputActive={inputActive}
          toggleInputActive={toggleInputActive}
          nextStep={nextStep}
          playlistItemURL={playlistItemURL}
          playlistItems={playlistItems}
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
