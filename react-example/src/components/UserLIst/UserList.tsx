import {FC} from "react";
import {IUserList} from "../../types/types";
import User from "../User/User";

const UserList: FC<IUserList> = ({users}) => {

    return (
        <div>
            {users?.map((user) => {
                return (
                    <User user={user} key={user.id}/>
                )
            })}
        </div>
    )
}

export default UserList;