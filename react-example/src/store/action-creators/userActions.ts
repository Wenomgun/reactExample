import {TypesAction, UserAction} from "../../types/userTypes";
import axios from "axios";
import {IUser} from "../../types/types";
import {Dispatch} from "redux";

// use thunk example
export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch(fetchUserAction());
            const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            dispatch(fetchUserSuccessAction(resp.data));
        } catch (e) {
            dispatch(fetchUserErrorAction('Error users load'));
        }
    }
}

export const requestUsersAction = () => {
    return {type: TypesAction.REQUEST_USERS}
}

export const fetchUserAction = (): UserAction => {
    return {
        type: TypesAction.FETCH_USERS
    }
}

export const fetchUserSuccessAction = (data: any[]): UserAction => {
    return {
        type: TypesAction.FETCH_USERS_SUCCESS,
        payload: data
    }
}

export const fetchUserErrorAction = (msg: string): UserAction => {
    return {
        type: TypesAction.FETCH_USERS_ERROR,
        payload: msg
    }
}