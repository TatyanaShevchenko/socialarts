import React from "react";
import style from "./Friends.module.css";
import userPhoto from "../../../images/user.png";


const Friend = ({user}) => {
    return (
        <div className={style.friendBlock}>
                <div>
                    <img className={style.friendPhoto}
                         src={user.photos.small != null ? user.photos.small : userPhoto} alt="">

                    </img>
                    <p className={style.friendName}>{user.name}</p>
                </div>
        </div>

    )
}


export default Friend;