import { useState } from 'react';
import { Div, NoItemsButton } from './PlaylistView2Styles'
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import NewPlaylistItemBar from '../NewPlaylistItemBar/NewPlaylistItemBar';
import PlaylistHeader from '../PlaylistHeader/PlaylistHeader'

const PlaylistView2 = ({
  nextStep,
  state,
  update
}) => {
  const [inputActive, toggleInputActive] = useState(false);

  const items = state.items.map((item) => {
    return <PlaylistItem key={item.id} playlistId={state.id} {...item} />
  });

  return (
    <>
      <PlaylistHeader 
        state={state}
        update={update}
      />
      <Div>
        <NewPlaylistItemBar
          inputActive={inputActive}
          toggleInputActive={toggleInputActive}
          nextStep={nextStep}
          state={state}
          update={update}
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
