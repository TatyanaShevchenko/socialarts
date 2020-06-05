import React from "react";
import style from "./Profile.module.css";
import AboutUser from "./AboutUser/AboutUser";
import UserPostsContainer from "./MyPosts/Post/UserPostsContainer";



const Profile = (props) => {
    return (
        <div className={style.profile}>
            <AboutUser profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <UserPostsContainer/>
        </div>
    );
};

export default Profile;
