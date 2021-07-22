import React, {FC, useEffect} from "react";
import {ITodo} from "../../types/types";
import List from "../Common/List";
import Todo from "../Todo/Todo";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import loading from "../../loadinfo.gif";
import classes from './TodoPage.module.css'

const TodoPage: FC = () => {
    const {todos, page, limit, error, isLoading, totalTodos} = useTypeSelector(state => state.todos);
    const pages = [];
    const totalPages = Math.ceil(totalTodos / limit);
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    const {fetchTodos} = useActions();
    const {changeTodoPage} = useActions();
    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    const changeCurrentPage = (page: number) => {
        changeTodoPage(page);
    }

    if (isLoading) {
        return <img style={{width: '100%'}} src={loading} alt={'Loading...'}/>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <h3>Todos</h3>
            <List items={todos} renderItem={(todo: ITodo) =>  <Todo todo={todo} key={todo.id}></Todo>}/>
            <div style={{display: "flex"}}>
                {pages.map((pageNumber) => {
                    return (
                        <div onClick={() => changeCurrentPage(pageNumber)}
                             className={[classes.PageWrap, page === pageNumber ? classes.PageCurrent : ''].join(' ')}
                             key={pageNumber}>{pageNumber}</div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoPage;