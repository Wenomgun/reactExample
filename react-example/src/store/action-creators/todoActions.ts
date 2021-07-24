import axios from "axios";
import {ITodo, IUser} from "../../types/types";
import {Dispatch} from "redux";
import {ITodoActionRequest, TodoAction, TypesAction} from "../../types/todoTypes";

export const fetchTodos = (page: number, limit: number) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TypesAction.FETCH_TODOS});
            const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            dispatch({type :TypesAction.FETCH_TODOS_SUCCESS, payload: resp.data});
        } catch (e) {
            dispatch({type :TypesAction.FETCH_TODOS_ERROR, payload: 'Error todos load'});
        }
    }
}

export const changeTodoPage = (page: number): TodoAction => {
    return {type :TypesAction.CHANGE_PAGE, payload: page}
}

export const fetchTodoAction = (): TodoAction => {
    return {type :TypesAction.FETCH_TODOS}
}

export const requestTodoAction = (page: number, limit: number): ITodoActionRequest => {
    return {
        type :TypesAction.REQUEST_TODO,
        payload: {
            page,
            limit
        }}
}

export const fetchTodoSuccessAction = (data: any[]): TodoAction => {
    return {type :TypesAction.FETCH_TODOS_SUCCESS, payload: data}
}

export const fetchTodoErrorAction = (msg: string): TodoAction => {
    return {type :TypesAction.FETCH_TODOS_ERROR, payload: msg}
}
