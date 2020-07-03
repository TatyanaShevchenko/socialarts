import React, {useState} from "react";
import style from "./Profile.module.css";
import AboutUser from "./AboutUser/AboutUser";
import UserPostsContainer from "./MyPosts/UserPostsContainer";




const Profile = (props) => {
    let [editMode, setEditMode] = useState(false);
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
                             followInProgress={props.followInProgress}
                             savePhoto ={props.savePhoto}
                      goToEditMode ={()=>setEditMode(true)}
                            />
            <UserPostsContainer/>
        </div>
    );
};

export default Profile;
