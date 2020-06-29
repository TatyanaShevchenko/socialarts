import React from "react";
import style from "./AboutUser.module.css";
import styleBtn from "../../Users/Users.module.css"
import Loading from "../../common/Loading/Loading";
import yes from "../../../images/needJobTrue.png";
import no from "../../../images/needJobFalse.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Button from '@material-ui/core/Button';


function AboutUser(props) {
    if (!props.profile) {
        return <Loading/>
    } else {

        //8164
        let userId;
        if (props.userId) {
            userId = props.userId;
        } else {
            userId=props.authorizedUserId;
        }
        const itIsYou = (userId) => {
            if (userId === props.authorizedUserId) {
                return (
                    <p className={style.itsYou}>It's you</p>
                )
            }
        }

        let needAJob = props.profile.lookingForAJob;
        let friends = props.friends;
        const funcNeedJob = (needAJob) => {
            if (needAJob) {
                return (
                    <img className={style.needJobPic} src={yes}></img>
                )
            } else {
                return (
                    <img className={style.needJobPic} src={no}></img>
                )
            }
        }
        const userArray = friends.filter(friend => friend.id == userId);
        let user;
        if (userArray.length !== 0) {
            user = userArray[0];
        }

        const funcFollowBtn = (user) => {
            if (!!user) {
                if (user.followed) {
                    return (<Button variant="contained" color="secondary"
                        //disabled={props.followInProgress}
                        className={styleBtn.unfollow}
                        onClick={() => {
                            props.unfollow(userId);
                        }}>
                        Unfollow
                    </Button>)
                } else {
                    return (
                        <Button variant="contained" color="primary"
                            //disabled={props.followInProgress}
                            onClick={() => {
                                props.follow(userId);
                            }}>
                            Follow
                        </Button>
                    )
                }
            } else if (userId !== props.authorizedUserId){
                return (
                    <Button variant="contained" color="primary"
                        //disabled={props.followInProgress.some(id => id === user.id)}
                        onClick={() => {
                            props.follow(userId);
                        }}>
                        Follow
                    </Button>)
            }
        }


        return (
            <div className={style.aboutMe}>
                <div className={style.background}>
                    <img
                        src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                        alt="background"/>
                </div>
                <div className={style.myInfo}>
                    <img className={style.avatar}
                         src={props.profile.photos.large}></img>
                    <div className={style.description}>
                        <h3>{props.profile.fullName} {itIsYou(userId)}</h3>

                        <p>{props.profile.aboutMe}</p>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>

                    <div className={styleBtn.btn}>
                        {funcFollowBtn(user)}
                    </div>

                    <div className={style.stuff}>
                        <div className={style.contacts}>
                            <p className={style.bold}>Я в соц. сетях</p>
                            <p>{props.profile.contacts.facebook}</p>
                            <p>{props.profile.contacts.website}</p>
                            <p>{props.profile.contacts.vk}</p>
                            <p>{props.profile.contacts.twitter}</p>
                            <p>{props.profile.contacts.instagram}</p>
                            <p>{props.profile.contacts.youtube}</p>
                            <p>{props.profile.contacts.github}</p>
                            <p>{props.profile.contacts.mainLink}</p>
                        </div>
                        <div className={style.needJob}>
                            <div className={style.flex}>
                                <p className={style.findAJob}>Ищу работу</p>
                                {funcNeedJob(needAJob)}
                            </div>
                            <p>{props.profile.lookingForAJobDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AboutUser;
