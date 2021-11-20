import { combineReducers, createStore } from "redux";
import playlistReducer from "./playlistReducer";

let reducers = combineReducers({
  playlist: playlistReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;
