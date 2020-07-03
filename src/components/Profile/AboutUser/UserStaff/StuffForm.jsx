import React from "react";
import style from "../AboutUser.module.css";
import Button from "@material-ui/core/Button";
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import styleBtn from "../../../Users/Users.module.css";

const UserProfileForm = ({saveProfile, itIsYou, funcFollowBtn, user, setEditMode, handleSubmit, ...props}) => {


    return <div className={style.aboutMe}>
        <div className={style.background}>
            <img
                src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                alt="background"/>
        </div>
        <div className={style.myInfo}>
            <img className={style.avatar}
                 src={props.profile.photos.large}></img>
            <form className={style.description} onSubmit={handleSubmit}>
                <p>Full name</p>
                <Field placeholder='Full name'
                       name="fullName"
                       component={Input}/>
                <p>About me</p>
                <Field
                    placeholder="About me"
                    name="aboutMe"
                    type="textarea"
                    component={Textarea}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                <StuffForm contacts={props.profile.contacts}
                lookingForAJobDescription={props.profile.lookingForAJobDescription}/>
                <Button className={style.stuffBtnDown} type="submit" variant="contained" color="secondary">save</Button>
            </form>

            <div className={styleBtn.btn}>
                {funcFollowBtn(user)}
            </div>

        </div>
    </div>
}

const StuffForm = ({contacts, lookingForAJobDescription}) => {
    return (
        <div>

            <div className={style.contacts}>
                <p className={style.bold}>Я в соц. сетях</p>
                {Object.keys(contacts).map(key => {
                    return <ContactEdit key={key} contactTitle={key} contactLink={contacts[key]}/>
                })}

            </div>

            <div className={style.needJob}>
                <div className={style.flex}>
                    <p className={style.findAJob}>Ищу работу</p>
                    <Field
                        className={style.checkbox}
                        name="lookingForAJob"
                        type="checkbox"
                        component={Checkbox}/>
                </div>
                <div>
                    <p>My professional skills</p>
                    <p>{lookingForAJobDescription}</p>
                    <Field
                        placeholder="My professional skills"
                        name="lookingForAJobDescription"
                        type="textarea"
                        component={Textarea}/>
                </div>
            </div>

        </div>
    )
}

const ContactEdit = ({contactTitle, contactLink}) => {
    return <div><b>{contactTitle}</b>:
        <Field placeholder={contactTitle}
               name={contactTitle}
               component={Input}/>
    </div>
}


const UserProfileReduxForm = reduxForm({form: 'aboutMe'})(UserProfileForm);
export default UserProfileReduxForm;