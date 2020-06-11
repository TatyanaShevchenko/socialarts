import React from "react";
import style from './Friends.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../images/user.png";


function Friends(props) {
    let friendsCount = props.friends.length;
    let friends = props.friends.map(user => {
            if (user.followed) {
                return (
                    <>
                        <div className={style.friendBlock}>
                            <NavLink to={'/profile/' + user.id}>

                                <img className={style.friendPhoto}
                                     src={user.photos.small != null ? user.photos.small : userPhoto} alt="">

                                </img>
                                <p className={style.friendName}>{user.name}</p>

                            </NavLink>
                        </div>


                    </>
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