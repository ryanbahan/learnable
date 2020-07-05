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
import { useState, useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ArchiveIcon from '@material-ui/icons/Archive';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
import { PlaylistContext } from '../../contexts/playlistContext';
import { useSession } from 'next-auth/client'

const AppNav = () => {
  const [hover, setHover] = useState(null);
  const appSettingsContext = useContext(AppSettingsContext);
  const { archiveView, view } = appSettingsContext.state;
  const { switchArchiveView, switchView } = appSettingsContext;
  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;
  const [session, loading] = useSession()
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
    session ?
    <Nav>
      {<H2>{!appSettingsContext.state.archiveView ? 'CURRENT' : 'ARCHIVED'}</H2>}
      <Div>
      <Wrapper onMouseEnter={() => setHover('AddIcon')}>
        <Button
          aria-label="add new playlist"
          disabled={!view || archiveView}
          onClick={cancel ? () => handleCancel() : () => handleAdd()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {cancel ? <RemoveIcon /> : <AddIcon />}
        </Button>
        {hover === 'AddIcon' ? (
          <P
            view={view}
            variants={variants}
            initial="disabled"
            animate="active"
          >
            {cancel ? 'Cancel' : 'New playlist'}
          </P>
        ) : null}
      </Wrapper>
      <Wrapper onMouseEnter={() => setHover('ViewIcon')}>
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
        {hover === 'ViewIcon' ? (
          <P
            id="view-text"
            view={view}
            variants={variants}
            initial="disabled"
            animate="active"
          >
            Toggle views
          </P>
        ) : null}
      </Wrapper>
      <Wrapper onMouseEnter={() => setHover('ArchiveIcon')}>
        <ArchiveButton
          aria-label="archive view"
          onClick={() => handleSwitchView(switchArchiveView)}
          whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.95 }}
          view={appSettingsContext.state.archiveView}
        >
          <ArchiveIcon />
        </ArchiveButton>
        {hover === 'ArchiveIcon' ? (
          <P
            id="archive-text"
            view={view}
            variants={variants}
            initial="disabled"
            animate="active"
          >
            Show archived
          </P>
        ) : null}
      </Wrapper>
      </Div>
    </Nav>
    : null
  )
};

export default AppNav;
