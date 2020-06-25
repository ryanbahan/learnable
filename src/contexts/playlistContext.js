import React, { createContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { sortPlaylistItems } from '../utils/utils';
import { useAuth0 } from '../react-auth0-spa';

export const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [state, setState] = useState({ playlists: [] });
  const { isLoading, error, sendRequest, clearError } = useFetch();
  const { user } = useAuth0();

  const fetchPlaylists = async () => {

    try {
      const responseData = await sendRequest(
        `http://learnablebe-env.eba-trycamvb.us-east-1.elasticbeanstalk.com/playlists/${user.sub}`
      );

      const formattedData = responseData.data.map((playlist) => {
        if (playlist.playlist_items) {
          sortPlaylistItems(playlist.playlist_items);
        }
        return playlist;
      });

      setState({ playlists: formattedData });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchPlaylists();
    } else {
      console.log('test')
    }
  }, [user]);

  const addPlaylist = (newPlaylist) => {
    setState((prevState) => ({
      playlists: [...prevState.playlists, newPlaylist],
    }));
  };

  const postPlaylist = async ({ user_id, title, due_date }) => {
    try {
      const responseData = await sendRequest(
        `https://learnablebe.herokuapp.com/api/v0/playlists`,
        'POST',
        JSON.stringify({ user_id, title, due_date }),
        { 'Content-Type': 'application/json' }
      );

      setState({
        playlists: [...state.playlists.filter((p) => p.id), responseData.data],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updatePlaylist = (updatedPlaylist) => {
    const { playlists } = state;

    setState({
      playlists: playlists.map((playlist) => {
        if (playlist.id === updatedPlaylist.id) {
          playlist = updatedPlaylist;
        }

        return playlist;
      }),
    });
  };

  const postPlaylistItem = async (newPlaylistItem) => {
    try {
      const responseData = await sendRequest(
        `https://learnablebe.herokuapp.com/api/v0/items`,
        'POST',
        JSON.stringify(newPlaylistItem),
        { 'Content-Type': 'application/json' }
      );

      updatePlaylist(responseData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const patchPlaylist = async (playlistId, updateParam) => {
    const userId = 1;
    try {
      const responseData = await sendRequest(
        `https://learnablebe.herokuapp.com/api/v0/user/${userId}/playlists/${playlistId}`,
        'PATCH',
        JSON.stringify(updateParam),
        { 'Content-Type': 'application/json' }
      );

      updatePlaylist(responseData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const patchPlaylistItem = async (
    playlistId,
    playlistItemId,
    playlistItemState
  ) => {
    try {
      const responseData = await sendRequest(
        `https://learnablebe.herokuapp.com/api/v0/playlists/${playlistId}/items/${playlistItemId}`,
        'PATCH',
        JSON.stringify(playlistItemState),
        { 'Content-Type': 'application/json' }
      );

      sortPlaylistItems(responseData.data.playlist_items);

      updatePlaylist(responseData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removePlaylist = () => {
    setState({
      playlists: state.playlists.filter((p) => p.id),
    });
  };

  const deletePlaylist = async (playlistId) => {
    try {
      const responseData = await sendRequest(
        `https://learnablebe.herokuapp.com/api/v0/playlists/${playlistId}`,
        'DELETE',
        { 'Content-Type': 'application/json' }
      );

      if (responseData.status === 200) {
        fetchPlaylists();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const cancelAdd = () => {
    setState({
      playlists: state.playlists.filter((p) => p.id),
    });
  };

  return (
    <PlaylistContext.Provider
      value={{
        state,
        addPlaylist,
        cancelAdd,
        deletePlaylist,
        patchPlaylist,
        patchPlaylistItem,
        postPlaylist,
        postPlaylistItem,
        removePlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
