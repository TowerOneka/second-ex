import { applyMiddleware, combineReducers, createStore } from "redux";
import modalReducer from "./reducers/modalReducer";
import playlistReducer from "./reducers/playlistReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/sagas";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

let reducers = combineReducers({
  playlist: playlistReducer,
  modal: modalReducer,
  router: connectRouter(history),
});

let store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(rootSaga);

window.store = store;

export default store;
