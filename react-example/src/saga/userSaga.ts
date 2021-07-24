import {TypesAction} from "../types/userTypes";
import {takeEvery, put, call} from 'redux-saga/effects'
import {fetchUserAction, fetchUserErrorAction, fetchUserSuccessAction} from "../store/action-creators/userActions";
import axios from "axios";
import {IUser} from "../types/types";

export const requestUsers = () => {
    return {type: TypesAction.REQUEST_USERS}
}

export function* watchRequestUsers() {
    yield takeEvery(TypesAction.REQUEST_USERS, fetchUsersAsync);
}

function* fetchUsersAsync(): Generator {
    try {
        yield put(fetchUserAction());
        const data = yield call(() => {
            return axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users').then (resp => resp.data)
        });
        yield put(fetchUserSuccessAction(data as any[]));
    } catch (e) {
        yield put(fetchUserErrorAction());
    }

}