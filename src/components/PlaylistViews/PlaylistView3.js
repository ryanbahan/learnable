import { Button, DoneButton, Grid, Span } from './PlaylistView3Styles'
import YouTubeIcon from '@material-ui/icons/YouTube';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AirplayIcon from '@material-ui/icons/Airplay';
import Input from '../Input/Input';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

const buttons = [
  {
    label: 'video',
    icon: <YouTubeIcon fontSize="large" style={{ fill: '#c4302b' }} />,
  },
  {
    label: 'audio',
    icon: <MicNoneOutlinedIcon fontSize="large" style={{ fill: '#8e44ad' }} />,
  },
  {
    label: 'article',
    icon: (
      <DescriptionOutlinedIcon fontSize="large" style={{ fill: '#16a085' }} />
    ),
  },
  {
    label: 'other',
    icon: <AirplayIcon fontSize="large" style={{ fill: '#2c3e50' }} />,
  },
];

const PlaylistView3 = ({
  category,
  handleSubmit,
  prevStep,
  playlistItemTitle,
  setCategory,
  setPlaylistItemTitle,
  state,
  update
}) => (
  <>
    <PlaylistItem category={state.category} title={state.newItemTitle} />
    <Input
      label="Playlist item title"
      onChangeHandler={(e) => setPlaylistItemTitle(e.target.value)}
      placeholder="what should we call this?"
      type="text"
      value={state.newItemTitle}
    />
    <Grid>
      {buttons.map((btn) => (
        <Button
          aria-label={btn.label}
          key={btn.label}
          onClick={() => update({ ...state, category: btn.label })}
        >
          {btn.icon}
          {btn.label}
        </Button>
      ))}
    </Grid>
    <div style={{ textAlign: 'center' }}>
      <DoneButton onClick={() => handleSubmit()}>Done</DoneButton>
      <Span onClick={() => prevStep()}>Cancel</Span>
    </div>
  </>
);

export default PlaylistView3;
