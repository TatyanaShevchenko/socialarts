import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../images/user.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let pagination = () => {
        const pagesJSX = pages.map(page => {
            return <li className={props.currentPage === page && style.selectedPage} onClick={(e) => {
                props.onPageChanged(page)
            }}>{page}</li>
        });
        let currentPageIndex = props.currentPage - 1;

        if (currentPageIndex === 0) {
            return (

                <ul className={style.pagesList}>
                    <li>{pagesJSX[0]}</li>
                    <li>{pagesJSX[currentPageIndex + 1]}</li>
                    <li>{pagesJSX[currentPageIndex + 2]}</li>
                    <li>{pagesJSX[currentPageIndex + 3]}</li>
                    <li>...</li>
                    <li>{pagesJSX[pagesCount - 1]}</li>
                </ul>
            )
        } else if (currentPageIndex === 1) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>{pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[currentPageIndex + 1]}</li>
                <li>{pagesJSX[currentPageIndex + 2]}</li>
                <li>...</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else if (currentPageIndex === 2) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li>{pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[currentPageIndex + 1]}</li>
                <li>...</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else if (currentPageIndex === pagesCount - 1) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>...</li>
                <li>{pagesJSX[currentPageIndex - 3]}</li>
                <li>{pagesJSX[currentPageIndex - 2]}</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else if (currentPageIndex === pagesCount - 2) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>...</li>
                <li>{pagesJSX[currentPageIndex - 2]}</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li>{pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else if (currentPageIndex === pagesCount - 3) {
            return (<ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>...</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li>{pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[currentPageIndex + 1]}</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>)
        } else return (
            <ul className={style.pagesList}>
                <li>{pagesJSX[0]}</li>
                <li>...</li>
                <li>{pagesJSX[currentPageIndex - 1]}</li>
                <li> {pagesJSX[currentPageIndex]}</li>
                <li>{pagesJSX[currentPageIndex + 1]}</li>
                <li>...</li>
                <li>{pagesJSX[pagesCount - 1]}</li>
            </ul>
        )

    }

    return (
        <div>
            {pagination()}
            {
                props.users.map(user => <div key={user.id}>
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
                                    ? <button disabled={props.followInProgress.some(id => id === user.id)}
                                              className={style.unfollow}
                                              onClick={() => {props.unfollow(user.id);}}>
                                        Unfollow
                                    </button>

                                    : <button disabled={props.followInProgress.some(id => id === user.id)}
                                              onClick={() => {props.follow(user.id);}}>
                                        Follow
                                    </button>
                                }
                            </div>
                        </div>

                        <div className={style.description}>
                            <p className={style.name}>{user.name}</p>
                            <p className={style.status}>{user.status != null ? user.status : "no status yet :("}</p>
                        </div>

                        {/*<div className={style.location}>*/}
                        {/*    <p className={style.location__item}>{user.location.city},<br></br>{user.location.country}*/}
                        {/*    </p>*/}
                        {/*</div>*/}

                        <div className={style.location}>
                            <p className={style.location__item}>City of my Dreams,<br></br>Somewhere in the world
                            </p>
                        </div>
                    </div>


                </div>)
            }
        </div>
    )
}


export default Users;