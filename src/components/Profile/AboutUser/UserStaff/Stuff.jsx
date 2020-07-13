import style from "../AboutUser.module.css";
import yes from "../../../../images/needJobTrue.png";
import no from "../../../../images/needJobFalse.png";
import Button from "@material-ui/core/Button";
import React from "react";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import styleBtn from "../../../Users/Users.module.css";
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";

const UserProfile = ({saveProfile, itIsYou, funcFollowBtn, user, setEditMode, ...props}) => {
    return <div className={style.aboutMe}>
        <div className={style.background}>
        </div>
        <div className={style.myInfo}>
            <img className={style.avatar}
                 src={props.profile.photos.large}></img>
            <div className={style.description}>
                <h3>{props.profile.fullName}</h3>
                {itIsYou
                    ? <p className={style.itsYou}>It's you</p>

                    : null}
                <p>{props.profile.aboutMe}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

            <div className={styleBtn.btn}>
                {funcFollowBtn(user)}
            </div>
            <Stuff contacts={props.profile.contacts}
                   lookingForAJobDescription={props.profile.lookingForAJobDescription}
                   lookingForAJob={props.profile.lookingForAJob}
                   goToEditMode={() => {
                       setEditMode(true)
                   }}
                   itIsYou={itIsYou}
            />
        </div>
    </div>
}
const Stuff = ({contacts, lookingForAJobDescription, lookingForAJob, goToEditMode, ...props}) => {
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
    return (
        <div className={style.stuff}>
            {props.itIsYou ?
                <Button className={style.stuffBtn} variant="contained" color="primary"
                        onClick={goToEditMode}>edit</Button>
                : null}
            <div className={style.contacts}>
                <p className={style.bold}>Я в соц. сетях</p>
                {Object.keys(contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactLink={contacts[key]}/>
                })}


            </div>
            <div className={style.needJob}>
                <div className={style.flex}>
                    <p className={style.findAJob}>Ищу работу</p>
                    {funcNeedJob(lookingForAJob)}
                </div>
                <div>
                    <p>My professional skills</p>
                    <p>{lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
}
const Contact = ({contactTitle, contactLink}) => {
    return <div><b>{contactTitle}</b>:{contactLink}</div>
}
export default UserProfile;