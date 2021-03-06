import { useState, useContext } from 'react';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
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
  state,
  update,
}) => {
  const appSettingsContext = useContext(AppSettingsContext);
  const { view } = appSettingsContext.state;

  const onItemSubmit = async () => {
    const res = await fetch("/api/ogReader", {
      method: "POST",
      body: JSON.stringify({ url: state.newItemLink })
    })

    const json = await res.json()
    update({ ...state, newItemTitle: json.title, step: state.step + 1})
    toggleInputActive(false);
  };

  return (
    <Article view={view}>
      <Div>
        <PlaylistItemCount>{state.items.length}</PlaylistItemCount>
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
