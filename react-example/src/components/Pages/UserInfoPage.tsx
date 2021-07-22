import React, {FC, useEffect, useState} from "react";
import {IUser, IUserInfoPage, IUserProps} from "../../types/types";
import axios from "axios";
import {useParams, useHistory} from 'react-router-dom'

const UserInfoPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams<IUserInfoPage>();
    const history = useHistory();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const resp = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(resp.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h3>User: {user?.name}</h3>
            <div>Email: <b>{user?.email}</b></div>
            <div>Address: <b>{user?.address.city + ' ' + user?.address.street}</b></div>
            <div>Phone: <b>{user?.phone}</b></div>
            <div>Company: <b>{user?.company.name}</b></div>
            <button onClick={() => history.push('/users')}>Back</button>
        </>
    )
}

export default UserInfoPage;