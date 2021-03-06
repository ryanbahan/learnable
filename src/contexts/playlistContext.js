import React, { createContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { sortPlaylistItems } from '../utils/utils';
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export const PlaylistContext = createContext();

const PlaylistProvider = ({ playlists, children }) => {
  const [state, setState] = useState({ playlists });
  const { isLoading, error, sendRequest, clearError } = useFetch();
  const [session, loading] = useSession()
  const router = useRouter()
  const base = process.env.baseAPIURL[process.env.type];

  const addPlaylist = (newPlaylist) => {
    setState((prevState) => ({
      playlists: [...prevState.playlists, newPlaylist],
    }));
  };

  const postPlaylist = async ({ title, due_date }) => {
    try {
      const responseData = await sendRequest(
        `${base}/playlists/${router.query.id}`,
        'POST',
        JSON.stringify({ collection_id: router.query.id, title, due_date, status: "active" }),
        { 'Content-Type': 'application/json' }
      );
      
      // BUGFIX
      responseData.playlist_items = []

      setState({
        playlists: [...state.playlists.filter((p) => p.id), responseData],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updatePlaylistItem = (newItem) => {
    const { playlists } = state;

    setState({
      playlists: playlists.map((playlist) => {
        if (playlist.id === newItem.playlist_id) {
          playlist.playlist_items = playlist.playlist_items.filter(p => p.id !== newItem.id)
          playlist.playlist_items.push(newItem)
        }

        sortPlaylistItems(playlist.playlist_items);

        return playlist;
      }),
    });
  };

  const updatePlaylist = (newItem) => {
    const { playlists } = state;

    setState({
      playlists: [...playlists.filter(p => p.id !== newItem.id), newItem]
    });
  };

  const postPlaylistItem = async (newPlaylistItem) => {
    try {
      const responseData = await sendRequest(
        `${base}/playlistItems`,
        'POST',
        JSON.stringify(newPlaylistItem),
        { 'Content-Type': 'application/json' }
      );

      updatePlaylistItem(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const patchPlaylist = async (playlistId, updateParam) => {
    try {
      const responseData = await sendRequest(
        `${base}/playlists/${playlistId}`,
        'PATCH',
        JSON.stringify(updateParam),
        { 'Content-Type': 'application/json' }
      );

      updatePlaylist(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const patchPlaylistItem = async (
    playlistItemId,
    playlistItemState
  ) => {
    try {
      const responseData = await sendRequest(
        `${base}/playlistItems/${playlistItemId}`,
        'PUT',
        JSON.stringify(playlistItemState),
        { 'Content-Type': 'application/json' }
      );

      updatePlaylistItem(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const removePlaylist = (id) => {
    setState({
      playlists: state.playlists.filter((p) => p.id !== id),
    });
  };

  const deletePlaylist = async (playlistId) => {

    removePlaylist(playlistId)

    try {
      const responseData = await sendRequest(
        `${base}/playlists/${playlistId}`,
        'DELETE',
        { 'Content-Type': 'application/json' }
      );

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
