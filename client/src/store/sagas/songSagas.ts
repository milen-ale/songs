// songsSaga.ts
import { put, takeLatest } from 'redux-saga/effects';
import { 
  getSongs, 
  addSong, 
  updateSong as updateSongApI, // Renamed to avoid conflict with function name
  deleteSong as deleteSongAPI // Renamed to avoid conflict with function name
} from '../../api/songsApi';
import { getSongsRequest,
   addSongRequest, 
   getSongsSuccess, 
  getSongsFailure, 
  addSongFailure, 
  addSongSuccess,
  updateSongRequest,
  deleteSongRequest,
  updateSongSuccess,
  deleteSongSuccess,
  updateSongFailure,
  deleteSongFailure, } from '../actions/songActions';

function* fetchSongs() {
  try {
    const songs = yield getSongs();
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure(error));
  }
}

function* addNewSong(action: { payload: any }) {
  try {
    const song = yield addSong(action.payload);
    console.log('songs', song); // Corrected logging statement
    yield put(addSongSuccess(song)); // Dispatch addSongSuccess action with the returned song data
  } catch (error) {
    yield put(addSongFailure(error));
  }
}

function* updateSong(action: { payload: { id: string; updatedSong: any } }) {
  try {
    const { id, updatedSong } = action.payload
    const response = yield updateSongApI(id, updatedSong);
    yield put(updateSongSuccess(response)); // Dispatch success action with updated song data
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}


function* removeSong(action: { payload: string }) {
  try {
    const id = action.payload; // Correctly destructure the payload
    yield deleteSongAPI(id);
    yield put(deleteSongSuccess(id));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}


export default function* songSaga() {
  yield takeLatest(getSongsRequest.type, fetchSongs);
  yield takeLatest(addSongRequest.type, addNewSong);
  yield takeLatest(updateSongRequest.type, updateSong);
  yield takeLatest(deleteSongRequest.type, removeSong);
}