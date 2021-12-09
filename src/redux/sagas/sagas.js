import { takeEvery, all, call, fork, put, apply } from "redux-saga/effects";
import { CHANGE_INPUT } from "../reducers/modalReducer";
import {
  ADD_SINGLE,
  CHANGE_FETCH,
  DELETE_SINGLE,
  EDIT_SINGLE,
  PLAYLIST_LOADED,
} from "../reducers/playlistReducer";
import { myApi } from "./../../API/api";

function* AddSingle(params) {
  const { request } = yield myApi.postSingle(params);

  yield put({ type: ADD_SINGLE, payload: params });
}

function* loadPlaylist() {
  yield put({ type: CHANGE_FETCH });

  const request = yield myApi.fetch();

  yield put({ type: PLAYLIST_LOADED, payload: request });

  yield put({ type: CHANGE_FETCH });
}

function* deleteSingle(itemId) {
  const request = yield myApi.deleteSingle(itemId.payload);

  yield put({ type: DELETE_SINGLE, payload: itemId.payload });
}

function* getCurrentSingle(itemId) {
  const request = yield myApi.getCurrentSingle(itemId.payload);

  yield put({ type: CHANGE_INPUT, payload: request });
}

function* editSingle(single) {
  const request = yield myApi.editSingle(single.payload);

  yield put({ type: EDIT_SINGLE, payload: single.payload });
}

function* watchDeleteSingle() {
  yield takeEvery("DELETE_SINGLE", deleteSingle);
}

function* watchGetCurrentSingle() {
  yield takeEvery("GET_CURRENT_SINGLE", getCurrentSingle);
}

function* watchEditSingle() {
  yield takeEvery("EDIT_SINGLE", editSingle);
}

function* watchLoadPlaylist() {
  yield takeEvery("LOAD_PLAYLIST", loadPlaylist);
}

function* watchAddSingle() {
  yield takeEvery("ADD_SINGLE", AddSingle);
}

export function* rootSaga() {
  yield all([
    watchLoadPlaylist(),
    watchAddSingle(),
    watchGetCurrentSingle(),
    watchDeleteSingle(),
    watchEditSingle(),
  ]);
}
