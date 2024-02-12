import { createAction } from '@reduxjs/toolkit';

export const getSongsRequest = createAction('GET_SONGS_REQUEST');
export const getSongsSuccess = createAction('GET_SONGS_SUCCESS');
export const getSongsFailure = createAction('GET_SONGS_FAILURE');
export const addSongRequest = createAction('ADD_SONG_REQUEST');
export const addSongSuccess = createAction('ADD_SONG_SUCCESS');
export const addSongFailure = createAction('ADD_SONG_FAILURE');

export const updateSongRequest = createAction<{ id: string; updatedSong: any }>('UPDATE_SONG_REQUEST');
export const deleteSongRequest = createAction<string>('DELETE_SONG_REQUEST');
export const updateSongSuccess = createAction<any>('UPDATE_SONG_SUCCESS');
export const deleteSongSuccess = createAction<string>('DELETE_SONG_SUCCESS');
export const updateSongFailure = createAction<string>('UPDATE_SONG_FAILURE');
export const deleteSongFailure = createAction<string>('DELETE_SONG_FAILURE');