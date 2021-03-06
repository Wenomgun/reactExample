import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import UserPage from "./components/Pages/UserPage";
import TodoPage from "./components/Pages/TodoPage";
import UserInfoPage from "./components/Pages/UserInfoPage";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <div className="AppRouter">
                    <h1>React example</h1>
                    <BrowserRouter>
                        <div>
                            <NavLink to={'/users'} className='LinkWrap'>Users</NavLink>
                            <NavLink to={'/todos'} className='LinkWrap'>Todos</NavLink>
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
            </Provider>
        </div>
    );
}

export default App;
