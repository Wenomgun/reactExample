import {IUserState, TypesAction, UserAction} from "../../types/userTypes";

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case TypesAction.FETCH_USERS: {
            return {users: [], error: null, isLoading: true}
        }
        case TypesAction.FETCH_USERS_SUCCESS: {
            return {users: action.payload, error: null, isLoading: false}
        }
        case TypesAction.FETCH_USERS_ERROR: {
            return {users: [], error: action.payload, isLoading: false}
        }
        default: {
            return state;
        }
    }
}