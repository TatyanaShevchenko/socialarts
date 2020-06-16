import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";


const Users = (props) => {

    return (
        <div>
            <Pagination totalItemsCount={props.totalUsersCount}
                        currentPage={props.currentPage}
                        pageSize={props.pageSize}
                        onPageChanged={props.onPageChanged}/>
            {
                props.users.map(user =>
                    <User key={user.id}
                          user={user}
                          followInProgress={props.followInProgress}
                          unfollow={props.unfollow}
                          follow={props.follow}/>
                )
            }
        </div>
    )
}


export default Users;