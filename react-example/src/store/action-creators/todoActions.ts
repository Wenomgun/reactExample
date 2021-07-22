import axios from "axios";
import {IUser} from "../../types/types";
import {Dispatch} from "redux";
import {TodoAction, TypesAction} from "../../types/todoTypes";

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

export const changeTodoPage = (page: number) => {
    return {type :TypesAction.CHANGE_PAGE, payload: page}
}