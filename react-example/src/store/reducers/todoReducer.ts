import {ITodoState, TodoAction, TypesAction} from "../../types/todoTypes";

const initialState: ITodoState = {
    todos: [],
    isLoading: false,
    error: null,
    limit: 10,
    page: 1,
    totalTodos: 200
}

export const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
    switch (action.type) {
        case TypesAction.FETCH_TODOS: {
            return {...state, isLoading: true}
        }
        case TypesAction.FETCH_TODOS_SUCCESS: {
            return {...state, todos: action.payload, error: null, isLoading: false}
        }
        case TypesAction.FETCH_TODOS_ERROR: {
            return {...state, todos: [], error: action.payload, isLoading: false}
        }
        case TypesAction.CHANGE_PAGE: {
            return {...state, page: action.payload}
        }
        default: {
            return state;
        }
    }
}