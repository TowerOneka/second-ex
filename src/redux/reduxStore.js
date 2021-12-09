import { applyMiddleware, combineReducers, createStore } from "redux";
import modalReducer from "./reducers/modalReducer";
import playlistReducer from "./reducers/playlistReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/sagas";
const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  playlist: playlistReducer,
  modal: modalReducer,
});

let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

window.store = store;

export default store;
