import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";

export const rootReducers = combineReducers({
    users: userReducer,
    todos: todoReducer,
})

export type RootState = ReturnType<typeof rootReducers>