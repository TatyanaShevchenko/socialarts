import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../images/user.png";
import {NavLink} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";


const User = ({user, followInProgress, unfollow, follow}) => {

    return (
        <div className={style.wrapper}>
            <div className={style.graphic}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={style.avatar}
                             src={user.photos.small != null ? user.photos.small : userPhoto} alt=""></img>
                    </NavLink>
                </div>
                <div className={style.btn}>
                    {user.followed
                        ? <button disabled={followInProgress.some(id => id === user.id)}
                                  className={style.unfollow}
                                  onClick={() => {
                                      unfollow(user.id);
                                  }}>
                            Unfollow
                        </button>

                        : <button disabled={followInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>
                            Follow
                        </button>
                    }
                </div>
            </div>

            <div className={style.description}>
                <p className={style.name}>{user.name}</p>
                <p className={style.status}>{user.status != null ? user.status : "no status yet :("}</p>
            </div>

            <div className={style.location}>
                <p className={style.location__item}>City,<br></br>Country
                </p>
            </div>
        </div>


    )
}


export default User;