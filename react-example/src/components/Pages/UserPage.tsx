import React, {FC, useEffect, useState} from "react";
import {IUser} from "../../Types/types";
import User from "../User/User";
import List from "../Common/List";
import axios from "axios";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const resp = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(resp.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h3>Users</h3>
            <List items={users} renderItem={(user: IUser) =>  <User user={user} key={user.id}></User>}/>
        </>
    )
}

export default UserPage;