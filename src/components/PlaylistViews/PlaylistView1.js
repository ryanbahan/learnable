import { Button, ButtonWrapper, Div } from './PlaylistView1Styles'
import { useContext, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistContext';
import DatePickerInput from '../DatePickerInput/DatePickerInput';
import Input from '../Input/Input';

const PlaylistView1 = ({
  onChangeHandler,
  playlistDate,
  setPlaylistDate,
  title,
}) => {
  const playlistContext = useContext(PlaylistContext);
  const [step, setStep] = useState(1);

  const handleSubmit = () => {
    const newPlaylist = {
      user_id: 1,
      title,
      due_date: playlistDate,
    };

    playlistContext.postPlaylist(newPlaylist);
  };

  return (
    <Div>
      {step === 1 && (
        <Input
          id="title"
          hasButton
          label="Title"
          onButtonClick={() => setStep(2)}
          onChangeHandler={(e) => onChangeHandler(e.target.value)}
          placeholder="first, name your list:"
          type="text"
          value={title}
        />
      )}
      {step === 2 && (
        <Input
          label="Title"
          onChangeHandler={(e) => onChangeHandler(e.target.value)}
          placeholder="first, name your list:"
          type="text"
          value={title}
        />
      )}
      {step === 2 && (
        <DatePickerInput
          playlistDate={playlistDate}
          setPlaylistDate={setPlaylistDate}
        />
      )}
      {step === 2 && (
        <ButtonWrapper>
          <Button onClick={() => handleSubmit()}>CREATE PLAYLIST</Button>
        </ButtonWrapper>
      )}
    </Div>
  );
};

export default PlaylistView1;
