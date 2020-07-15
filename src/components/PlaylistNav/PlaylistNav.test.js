import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import theme from '../../styles/theme';
import { PlaylistContext } from '../../contexts/playlistContext';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
import PlaylistNav from './PlaylistNav';

afterEach(cleanup);

const mockContextNullId = {
    state: {
        playlists: [
            {
                id: 1,
                title: 'Learn Javascript',
                user_id: 1,
                status: 1,
                due_date: '07/04/2020',
                playlist_items: [
                    {
                        id: 1,
                        title: 'JavaScript Crash Course',
                        url: '#',
                        isComplete: false,
                        category: null,
                        playlist_id: 1,
                    },
                ],
            },
            {
                id: null,
                title: 'Learn Ruby',
                user_id: 1,
                status: 1,
                due_date: '08/14/2020',
                playlist_items: [],
            },
        ],
    },
};

const mockAddplaylist = jest.fn();

function renderComponent(props, playlists, appSettings) {
    const utils = render(
        <AppSettingsContext.Provider value={{
            state: {view: true, archiveView: false},
            switchView: () => jest.fn(),
            switchArchiveView: () => jest.fn(),
        }}>
            <PlaylistContext.Provider value={playlists}>
                <ThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <PlaylistNav {...props} />
                    </MuiPickersUtilsProvider>
                </ThemeProvider>
            </PlaylistContext.Provider>
        </AppSettingsContext.Provider>
    );

    return { ...utils };
}

test('it renders the correct content', () => {
    const { getByLabelText } = renderComponent({}, { state: { playlists: [] } });
    const btn = getByLabelText('add new playlist');
    expect(btn).toBeInTheDocument();
    expect(btn).not.toBeDisabled();
});
