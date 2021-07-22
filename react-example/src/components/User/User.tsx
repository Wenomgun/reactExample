import {FC} from "react";
import {IUserProps} from "../../Types/types";
import {useHistory} from "react-router-dom";
import classes from './User.module.css'

const User: FC<IUserProps> = ({user}) => {
    const history = useHistory();
    return (
        <div onClick={() => history.push(`/users/${user.id}`)}
             className={classes.UserWrap}>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.phone}</span>
            <span>{user.company.name}</span>
        </div>
    )
}

export default User;