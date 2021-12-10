import { LOCATION_CHANGE } from "connected-react-router";
import {
  takeEvery,
  all,
  call,
  fork,
  put,
  apply,
  take,
  spawn,
} from "redux-saga/effects";
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
  const request = yield call(myApi.postSingle, params);

  yield put({ type: ADD_SINGLE, payload: params });
}

function* loadPlaylist() {
  yield put({ type: CHANGE_FETCH });

  const request = yield call(myApi.fetch);

  yield put({ type: PLAYLIST_LOADED, payload: request });

  yield put({ type: CHANGE_FETCH });
}

function* deleteSingle(itemId) {
  const request = yield call(myApi.deleteSingle, itemId.payload);

  yield put({ type: DELETE_SINGLE, payload: itemId.payload });
}

function* getCurrentSingle(itemId) {
  const request = yield call(myApi.getCurrentSingle, itemId);

  yield put({ type: CHANGE_INPUT, payload: request });
}

function* editSingle(single) {
  const request = yield call(myApi.editSingle, single.payload);

  yield put({ type: EDIT_SINGLE, payload: single.payload });
}

function* watchDeleteSingle() {
  yield takeEvery("DELETE_SINGLE", deleteSingle);
}

function* watchGetCurrentSingle() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname.startsWith("/items/")) {
      yield fork(
        getCurrentSingle,
        action.payload.location.pathname.substring(7, 9)
      );
    }
  }
}

function* watchEditSingle() {
  yield takeEvery("EDIT_SINGLE", editSingle);
}

function* watchLoadPlaylist() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    console.log(action);
    if (action.payload.location.pathname.endsWith("/")) {
      yield fork(loadPlaylist);
    }
  }
}

function* watchAddSingle() {
  yield takeEvery("ADD_SINGLE", AddSingle);
}

export function* rootSaga() {
  yield spawn(watchLoadPlaylist);
  yield spawn(watchAddSingle);
  yield spawn(watchGetCurrentSingle);
  yield spawn(watchDeleteSingle);
  yield spawn(watchEditSingle);
}
