import {takeEvery, put, call} from 'redux-saga/effects';
import {ITodoActionRequest, TypesAction} from "../types/todoTypes";
import {fetchTodoAction, fetchTodoErrorAction, fetchTodoSuccessAction} from "../store/action-creators/todoActions";
import axios from "axios";
import {ITodo} from "../types/types";

export function* requestTodoWatcher() {
    yield takeEvery(TypesAction.REQUEST_TODO, requestTodoWorker);
}

function* requestTodoWorker(action: ITodoActionRequest): Generator {
    try {
        yield put(fetchTodoAction());
        const data = yield call(() => {
            return axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: action.payload.limit,
                    _page: action.payload.page
                }
            }).then(resp => resp.data);
        })
        yield put(fetchTodoSuccessAction(data as unknown as any[]));
    } catch (e) {
        yield put(fetchTodoErrorAction('Error todos load'));
    }
}