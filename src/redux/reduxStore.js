import { combineReducers, createStore } from "redux";
import modalReducer from "./modalReducer";
import playlistReducer from "./playlistReducer";

let reducers = combineReducers({
  playlist: playlistReducer,
  modal: modalReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
