import React, {FC, useEffect, useState} from "react";
import {ITodo, IUser} from "../../types/types";
import List from "../Common/List";
import axios from "axios";
import Todo from "../Todo/Todo";

const TodoPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const resp = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10&_page=2');
            setTodos(resp.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h3>Todos</h3>
            <List items={todos} renderItem={(todo: ITodo) =>  <Todo todo={todo} key={todo.id}></Todo>}/>
        </>
    )
}

export default TodoPage;