import {ITodo} from "./types";

export interface ITodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: null | string;
    limit: number;
    page: number;
    totalTodos: number;
}

export enum TypesAction {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    CHANGE_PAGE = 'CHANGE_PAGE',
}

interface ITodoActionFetch {
    type: TypesAction.FETCH_TODOS
}

interface ITodoActionFetchSuccess {
    type: TypesAction.FETCH_TODOS_SUCCESS,
    payload: any[]
}

interface ITodoActionFetchError {
    type: TypesAction.FETCH_TODOS_ERROR,
    payload: string
}

interface ITodoChangePage {
    type: TypesAction.CHANGE_PAGE,
    payload: number
}

export type TodoAction = ITodoActionFetch | ITodoActionFetchSuccess | ITodoActionFetchError | ITodoChangePage;
