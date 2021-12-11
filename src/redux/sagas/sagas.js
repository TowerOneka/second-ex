import { LOCATION_CHANGE, push } from "connected-react-router";
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
  try {
    const request = yield call(myApi.postSingle, params);
    yield put({ type: ADD_SINGLE, payload: params });
  } catch (e) {
    console.log(e);
  }
}

function* loadPlaylist() {
  yield put({ type: CHANGE_FETCH });

  try {
    const request = yield call(myApi.fetch);
    yield put({ type: PLAYLIST_LOADED, payload: request });
  } catch (e) {
    console.log(e);
  }

  yield put({ type: CHANGE_FETCH });
}

function* deleteSingle(itemId) {
  try {
    const request = yield call(myApi.deleteSingle, itemId.payload);

    yield put({ type: DELETE_SINGLE, payload: itemId.payload });
  } catch (e) {
    console.log(e);
  }
}

function* getCurrentSingle(itemId) {
  try {
    const request = yield call(myApi.getCurrentSingle, itemId);

    yield put({ type: CHANGE_INPUT, payload: request });
  } catch (e) {
    console.log(e);
  }
}

function* editSingle(single) {
  try {
    const request = yield call(myApi.editSingle, single.payload);
    yield put({ type: EDIT_SINGLE, payload: single.payload });
  } catch (e) {
    console.log(e);
  }
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
