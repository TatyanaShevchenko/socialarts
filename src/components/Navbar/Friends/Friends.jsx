import React from "react";
import style from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let friends = props.friends.map(friend => {
            return <div className={style.friendBlock}>
                <NavLink to="/friendURL">
                    <img className={style.friendPhoto} src={friend.photo}/>
                    <p className={style.friendName}>{friend.name}</p>
                </NavLink>
            </div>
        }
    )


    return (
        <div>
            <h3 className={style.title}>Friends</h3>
            <div className={style.wrapper}>
            <div className={style.friends}>

                {friends}
            </div>
        </div>
        </div>
    );
};

export default Friends;
