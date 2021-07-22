import {combineReducers} from "redux";
import {userReducer} from "./userReducer";

export const rootReducers = combineReducers({
    users: userReducer,
    todos: userReducer,
})

export type RootState = ReturnType<typeof rootReducers>