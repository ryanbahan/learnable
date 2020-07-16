import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import { PlaylistContext } from '../../contexts/playlistContext';
import CollectionsNav from './CollectionsNav';

afterEach(cleanup);

const mockFetchPromise = Promise.resolve({
  json: () => Promise.resolve({}),
});

window.fetch = jest.fn(() => mockFetchPromise)

function renderHeader(props, context) {
  const utils = render(
      <PlaylistContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <CollectionsNav {...props} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PlaylistContext.Provider>
  );

  return { ...utils };
}

test.skip('it renders the expected content', () => {
  const { getByRole } = renderHeader({});
  const nav = getByRole('navigation');
  expect(nav).toBeInTheDocument();
});
