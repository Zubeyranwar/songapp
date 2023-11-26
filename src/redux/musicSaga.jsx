import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import {
  ADD_MUSIC,
  DELETE_MUSIC,
  MUSIC_LIST,
  SET_MUSIC_LIST,
  UPDATE_MUSIC,
} from "./constant";

function* getMusic() {
  let data = yield fetch("https://6554aa1f63cafc694fe6c63c.mockapi.io/songs");
  data = yield data.json();
  yield put({ type: SET_MUSIC_LIST, data });
}

function* add_Music(action) {
  const musicData = action.data;

  try {
    const response = yield axios.post(
      "https://6554aa1f63cafc694fe6c63c.mockapi.io/songs",
      musicData
    );
    yield put({ type: SET_MUSIC_LIST, payload: response.data });
  } catch (err) {
    console.error(err);
  }
}

function* deleteMusic(action) {
  const musicData = action.data;
  try {
    yield axios.delete(
      `https://6554aa1f63cafc694fe6c63c.mockapi.io/songs/${musicData}`
    );
  } catch (error) {
    console.log(error);
  }
}

function* updateMusic(action) {
  const musicData = action.data;
  try {
    yield axios
      .put(
        `https://6554aa1f63cafc694fe6c63c.mockapi.io/songs/${musicData.id}`,
        musicData
      )
      .then((res) => {
        put({ type: SET_MUSIC_LIST, payload: res.data });
      });
  } catch (error) {
    console.log(error);
  }
}


function* musicSaga() {
  yield takeEvery(MUSIC_LIST, getMusic);
  yield takeEvery(ADD_MUSIC, add_Music);
  yield takeEvery(DELETE_MUSIC, deleteMusic);
  yield takeEvery(UPDATE_MUSIC, updateMusic);
}
export default musicSaga;
