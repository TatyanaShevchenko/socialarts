import React, {useState} from "react";
import style from "./AboutUser.module.css";
import styleBtn from "../../Users/Users.module.css"
import Loading from "../../common/Loading/Loading";
import Button from '@material-ui/core/Button';
import UserProfile from "./UserStaff/Stuff";
import UserProfileReduxForm from "./UserStaff/StuffForm";


function AboutUser({saveProfile, ...props}) {
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Loading/>
    } else {

        let userId;
        if (props.userId) {
            userId = props.userId;
        } else {
            userId = props.authorizedUserId;
        }
        const isItYou = (userId) => {
            if (userId === props.authorizedUserId) {
                return true;
            } else {
                return false;
            }
        }

        let friends = props.friends;
        const userArray = friends.filter(friend => friend.id == userId);
        let user;
        const itIsYou = isItYou(userId);
        if (userArray.length !== 0) {
            user = userArray[0];
        }

        const funcFollowBtn = (user) => {
            if (!!user) {
                if (user.followed) {
                    return (<Button variant="contained" color="secondary"
                                    className={styleBtn.unfollow}
                                    onClick={() => {
                                        props.unfollow(userId);
                                    }}>
                        Unfollow
                    </Button>)
                } else {
                    return (
                        <Button variant="contained" color="primary"
                                onClick={() => {
                                    props.follow(userId);
                                }}>
                            Follow
                        </Button>
                    )
                }
            } else if (userId !== props.authorizedUserId) {
                return (
                    <Button variant="contained" color="primary"
                            onClick={() => {
                                props.follow(userId);
                            }}>
                        Follow
                    </Button>)
            }
        }
        const submit = (formData) => {
            saveProfile(formData).then(
                ()=>{
                    setEditMode(false);
                }
            );
        }

        return (
            <>
                {editMode
                    ? <UserProfileReduxForm
                        initialValues={props.profile}
                        onSubmit={submit}
                        itIsYou={itIsYou}
                        user={user}
                        funcFollowBtn={funcFollowBtn}
                        saveProfile={props.saveProfile}
                        profile={props.profile}
                        status={props.status}
                        updateStatus={props.updateStatus}
                        friends={props.friends}
                        userId={props.userId}
                        authorizedUserId={props.authorizedUserId}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followInProgress={props.followInProgress}
                        savePhoto={props.savePhoto}
                        goToEditMode={() => setEditMode(true)}
                        setEditMode={setEditMode}
                        contacts={props.profile.contacts}
                        lookingForAJobDescription={props.profile.lookingForAJobDescription}
                    />
                    : <UserProfile itIsYou={itIsYou}
                                   user={user}
                                   funcFollowBtn={funcFollowBtn}
                                   saveProfile={props.saveProfile}
                                   profile={props.profile}
                                   status={props.status}
                                   updateStatus={props.updateStatus}
                                   friends={props.friends}
                                   userId={props.userId}
                                   authorizedUserId={props.authorizedUserId}
                                   follow={props.follow}
                                   unfollow={props.unfollow}
                                   followInProgress={props.followInProgress}
                                   savePhoto={props.savePhoto}
                                   goToEditMode={() => setEditMode(true)}
                                   setEditMode={setEditMode}/>}
            </>
        );
    }
}


export default AboutUser;
