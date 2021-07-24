import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducers} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import {requestUsersWatcher} from "../saga/userSaga";
import {rootWatcher} from "../saga";
// interface IWindow {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
// }
//
// const composeEnhancers =
//     typeof window === 'object' &&
//     (window as unknown as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         (window as unknown as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         }) : compose;
//
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );
const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootWatcher);