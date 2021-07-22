import React, {FC, useEffect, useState} from "react";
import {IUser} from "../../types/types";
import User from "../User/User";
import List from "../Common/List";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {fetchUsers} from "../../store/action-creators/userActions";
import loading from '../../loadinfo.gif';
import {useActions} from "../../hooks/useActions";

const UserPage: FC = () => {
    const {users, isLoading, error} = useTypeSelector(state => state.users);
    const {fetchUsers} = useActions();
    useEffect(() => {
        fetchUsers();
    }, []);

    if (isLoading) {
        return <img style={{width: '100%'}} src={loading} alt={'Loading...'}/>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <h3>Users</h3>
            <List items={users} renderItem={(user: IUser) =>  <User user={user} key={user.id}></User>}/>
        </>
    )
}

export default UserPage;