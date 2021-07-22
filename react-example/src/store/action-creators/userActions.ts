import {TypesAction, UserAction} from "../../types/userTypes";
import axios from "axios";
import {IUser} from "../../types/types";
import {Dispatch} from "redux";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: TypesAction.FETCH_USERS});
            const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            dispatch({type :TypesAction.FETCH_USERS_SUCCESS, payload: resp.data});
        } catch (e) {
            dispatch({type :TypesAction.FETCH_USERS_ERROR, payload: 'Error users load'});
        }
    }
}