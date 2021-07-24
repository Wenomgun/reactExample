import {all} from 'redux-saga/effects'
import {requestUsersWatcher} from "./userSaga";
import {requestTodoWatcher} from "./todoSaga";

export function* rootWatcher() {
    yield all([requestUsersWatcher(), requestTodoWatcher()]);
}