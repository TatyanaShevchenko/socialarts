import React from "react";
import style from "./AboutUser.module.css";
import s from "../../Users/Users.module.css"
import Loading from "../../common/Loading/Loading";
import yes from "../../../images/needJobTrue.png";
import no from "../../../images/needJobFalse.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const AboutUser = (props) => {
    if (!props.profile) {
        return <Loading/>
    } else{
        let needAJob = props.profile.lookingForAJob;
        const funcNeedJob =(needAJob)=>{
            if (needAJob ){
                return (
                    <img className={style.needJobPic} src={yes} ></img>
                )
            }else{
                return (
                    <img className={style.needJobPic} src={no} ></img>
                )
            }}
    return (
        <div className={style.aboutMe}>
            <div className={style.background}>
                <img
                    src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                    alt="background"/>
            </div>
            <div className={style.myInfo}>
                <img className={style.avatar}
                     src={props.profile.photos.large} ></img>
                <div className={style.description}>
                    <h3>{props.profile.fullName}</h3>
                    <p>{props.profile.aboutMe}</p>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
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
    );}
};

export default AboutUser;
