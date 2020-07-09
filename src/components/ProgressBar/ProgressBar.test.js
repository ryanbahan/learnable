import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import { PlaylistContext } from '../../contexts/playlistContext';
import ProgressBar from './ProgressBar';

afterEach(cleanup);

function renderProgressBar(props, context) {
  const utils = render(
    <PlaylistContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <ProgressBar {...props} />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </PlaylistContext.Provider>
  );

  return { ...utils };
}

test('it renders the correct content', () => {
  renderProgressBar({ playlistItems: [] });
  expect(screen.getByTestId('progressbar')).toBeInTheDocument();
});
