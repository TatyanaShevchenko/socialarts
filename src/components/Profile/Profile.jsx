import React from "react";
import style from "./Profile.module.css";
import AboutUser from "./AboutUser/AboutUser";
import UserPostsContainer from "./MyPosts/UserPostsContainer";
import Users from "../Users/Users";



const Profile = (props) => {
    return (
        <div className={style.profile}>
            <AboutUser profile={props.profile}
                       status={props.status}
                       updateStatus={props.updateStatus}
                       friends={props.friends}
                       userId = {props.userId}
                       authorizedUserId={props.authorizedUserId}
                       follow={props.follow}
                       unfollow={props.unfollow}
                       followInProgress={props.followInProgress}/>
            <UserPostsContainer/>
        </div>
    );
};

export default Profile;
