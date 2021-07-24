import {IUser} from "./types";

export interface IUserState {
    users: IUser[];
    isLoading: boolean;
    error: null | string;
}

export enum TypesAction {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    REQUEST_USERS = 'REQUEST_USERS'
}

interface IUserActionFetch {
    type: TypesAction.FETCH_USERS
}

interface IUserActionFetchSuccess {
    type: TypesAction.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface IUserActionFetchError {
    type: TypesAction.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = IUserActionFetch | IUserActionFetchSuccess | IUserActionFetchError;
