import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import UserPage from "./components/Pages/UserPage";
import TodoPage from "./components/Pages/TodoPage";
import UserInfoPage from "./components/Pages/UserInfoPage";

function App() {

    return (
        <div className="App">
            <div className="AppRouter">
                <h1>React example</h1>
                <BrowserRouter>
                    <div>
                        <NavLink to={'/users'}>Users</NavLink>
                        <NavLink to={'/todos'}>Todos</NavLink>
                    </div>

                    <Route path={'/users'} exact>
                        <UserPage></UserPage>
                    </Route>
                    <Route path={'/todos'} exact>
                        <TodoPage></TodoPage>
                    </Route>
                    <Route path={'/users/:id'}>
                        <UserInfoPage></UserInfoPage>
                    </Route>
                </BrowserRouter>
            </div>
        </div>

    );
}

export default App;
