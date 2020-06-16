import React from "react";
import style from './Friends.module.css';
import {NavLink, Route} from "react-router-dom";
import Friend from "./Friend";


function Friends(props) {
    let friendsCount = props.friends.length;
    let friends = props.friends.map(user => {
            if (user.followed) {
                return (
                    <NavLink exact to={'/profile/' + user.id}>
                         <Friend user={user}/>
                    </NavLink>
                )
            }
        }
    )


    return (
        <div>
            <h3 className={style.title}>Following ({friendsCount})</h3>
            <div className={style.wrapper}>
                <div className={style.friends}>
                    {friends}
                </div>
            </div>
        </div>
    );
}


export default Friends;