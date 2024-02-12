// songReducer.ts
import { createReducer } from '@reduxjs/toolkit';

import { getSongsSuccess, getSongsRequest, getSongsFailure, addSongRequest, addSongSuccess, addSongFailure, updateSongRequest, updateSongSuccess, updateSongFailure, deleteSongRequest, deleteSongSuccess, deleteSongFailure } from '../actions/songActions';



interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string[];
}

interface SongState {
  songs: Song[];
  loading: boolean;
  error: any;
}

const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
};

const songReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getSongsSuccess, (state, action) => {
      state.songs = action.payload || [];
      state.loading = false;
      state.error = null;
    })
    .addCase(getSongsRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getSongsFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addSongRequest, (state) => {
      state.loading = true; // Set loading state to true while adding the song
      state.error = null;
      
    })
    .addCase(addSongSuccess, (state, action) => {
      // Add the song to the state with the UUID generated earlier
      state.songs.push(action.payload.song);
      console.log(JSON.parse(JSON.stringify(state.songs)));
      console.log('action.payload', action.payload)
      state.loading = false;
      state.error = null;
    })

    .addCase(addSongFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateSongRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
   
    .addCase(updateSongSuccess, (state, action) => {
      const updatedSongIndex = state.songs.findIndex(song => song._id === action.payload._id);
      if (updatedSongIndex !== -1) {
        state.songs[updatedSongIndex] = action.payload;
      }
      state.loading = false;
      state.error = null;
    })
    
 
    .addCase(deleteSongRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteSongSuccess, (state, action) => {
      state.songs = state.songs.filter(song => song._id !== action.payload);
      state.loading = false;
      state.error = null;
    })
    .addCase(deleteSongFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
 
});

export default songReducer;
