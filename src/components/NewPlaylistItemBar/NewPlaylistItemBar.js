import { useState } from 'react';
import Input from '../Input/Input';
import {
  Article,
  Div,
  Button,
  PlaylistItemCount,
  Span,
} from './styles'

const NewPlaylistItemBar = ({
  inputActive,
  toggleInputActive,
  nextStep,
  playlistItemURL,
  playlistItems,
  setPlaylistItemURL,
  setPlaylistItemTitle,
  state,
  update
}) => {

  const onItemSubmit = async () => {
    const res = await fetch("/api/ogReader", {
      method: "POST",
      body: JSON.stringify({ url: state.newItemLink })
    })

    const json = await res.json()
    update({ ...state, newItemTitle: json.title})
    nextStep();
    toggleInputActive(false);
  };

  return (
    <Article>
      <Div>
        <PlaylistItemCount>{playlistItems.length}</PlaylistItemCount>
        <Button onClick={() => toggleInputActive(!inputActive)}>
          {inputActive ? <Span>- close</Span> : <Span>+ new item</Span>}
        </Button>
      </Div>

      {inputActive && (
        <Input
          id="item"
          hasButton
          label="Item"
          onButtonClick={() => onItemSubmit()}
          onChangeHandler={(e) => update({ ...state, newItemLink: e.target.value })}
          placeholder="now, add an item URL:"
          type="text"
          value={state.newItemLink}
        />
      )}
    </Article>
  );
};

export default NewPlaylistItemBar;
