import { Button, ButtonWrapper, Div } from './PlaylistView1Styles'
import { useContext, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistContext';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Input from '../Input/Input';

const PlaylistView1 = ({
  state,
  update
}) => {
  const playlistContext = useContext(PlaylistContext);
  const [step, setStep] = useState(1);

  const handleSubmit = () => {
    const newPlaylist = {
      title: state.title,
      due_date: state.date,
    };

    playlistContext.postPlaylist(newPlaylist);
  };

  const formatDateChange = (date) => {
    update({ ...state, date: date.format('MM/DD/YYYY') });
  };

  return (
    <Div>
      {step === 1 && (
        <Input
          id="title"
          hasButton
          label="Title"
          onButtonClick={() => setStep(2)}
          onChangeHandler={(e) => update({ ...state, title: e.target.value })}
          placeholder="first, name your list:"
          type="text"
          value={state.title}
        />
      )}
      {step === 2 && (
        <Input
          label="Title"
          onChangeHandler={(e) => update({ ...state, title: e.target.value })}
          placeholder="first, name your list:"
          type="text"
          value={state.title}
        />
      )}
      {step === 2 && (
        <KeyboardDatePicker
          autoOk
          disableToolbar
          variant="inline"
          format="MM/DD/YYYY"
          margin="normal"
          id="date-picker-inline"
          value={state.date}
          onChange={formatDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      )}
      {step === 2 && (
        <ButtonWrapper>
          <Button onClick={() => handleSubmit()}>Create Playlist</Button>
        </ButtonWrapper>
      )}
    </Div>
  );
};

export default PlaylistView1;
