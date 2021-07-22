import {FC} from "react";
import {ITodoProps} from "../../Types/types";
import classes from './Todo.module.css'

const Todo: FC<ITodoProps> = ({todo}) => {
    return (
        <div className={classes.TodoWrap}>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span><input type={'checkbox'} checked={todo.completed}/></span>
        </div>
    )
}

export default Todo;