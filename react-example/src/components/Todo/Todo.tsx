import {FC} from "react";
import {ITodoProps} from "../../Types/types";

const Todo: FC<ITodoProps> = ({todo}) => {
    return (
        <div style={{border: '1px solid black', margin: '4px'}}>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span><input type={'checkbox'} checked={todo.completed}/></span>
        </div>
    )
}

export default Todo;