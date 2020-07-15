import { variants } from './animations'
import {
  H2,
  ArchiveButton,
  Button,
  Div,
  Nav,
  P,
  Wrapper,
} from './styles'
import { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ArchiveIcon from '@material-ui/icons/Archive';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
import { PlaylistContext } from '../../contexts/playlistContext';

const PlaylistNav = () => {
  const appSettingsContext = useContext(AppSettingsContext);
  const { switchArchiveView, switchView } = appSettingsContext;
  const { archiveView, view } = appSettingsContext.state;
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;
  let cancel = false;

  if (playlists.length) {
    cancel = !playlists[playlists.length - 1].id;
  }

  const handleAdd = () => {
    playlistContext.addPlaylist({
      id: null,
      title: '',
      user_id: 1,
      status: 'valid',
      due_date: '',
      playlist_items: [],
    });
  };

  const handleCancel = () => {
    playlistContext.cancelAdd();
  };

  const handleSwitchView = (callback) => {
    if (cancel) {
      handleCancel();
    }

    callback();
  };

  return (
    <Nav>
      {<H2>{!appSettingsContext.state.archiveView ? 'CURRENT' : 'ARCHIVED'}</H2>}
      <Div>
      <Wrapper>
        <Button
          aria-label="add new playlist"
          disabled={!view || archiveView}
          onClick={cancel ? () => handleCancel() : () => handleAdd()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {cancel ? <RemoveIcon /> : <AddIcon />}
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          aria-label="card view"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSwitchView(switchView)}
        >
          {view === true ? (
            <ViewHeadlineIcon />
          ) : (
            <ViewWeekIcon fontSize="large" />
          )}
        </Button>
      </Wrapper>
      <Wrapper>
        <ArchiveButton
          aria-label="archive view"
          onClick={() => handleSwitchView(switchArchiveView)}
          whileHover={{ scale: 1.1 }}
          view={appSettingsContext.state.archiveView}
        >
          <ArchiveIcon />
        </ArchiveButton>
      </Wrapper>
      </Div>
    </Nav>
  )
};

export default PlaylistNav;
