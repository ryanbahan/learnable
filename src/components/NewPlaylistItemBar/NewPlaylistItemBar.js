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
}) => {
  const formatUrl = (url) => {
    if (!url.includes('//')) {
      url = `//${url}`;
    }

    setPlaylistItemURL(url);
    return url
  };

  const onItemSubmit = async () => {
    const url = await formatUrl(playlistItemURL);

    const res = await fetch("/api/ogReader", {
      method: "POST",
      body: JSON.stringify({ url: url })
    })

    const json = await res.json()

    console.log("json", json)


    // nextStep();
    // toggleInputActive(false);
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
          onChangeHandler={(e) => setPlaylistItemURL(e.target.value)}
          placeholder="now, add an item URL:"
          type="text"
          value={playlistItemURL}
        />
      )}
    </Article>
  );
};

export default NewPlaylistItemBar;
