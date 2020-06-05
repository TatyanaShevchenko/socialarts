import React from "react";
import style from "./SendMessage.module.css";
import {Field, reduxForm} from "redux-form";

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.addMessage}>
            <Field placeholder={"Enter your message"} name={"newMessageBody"} component={"textarea"}/>
            <button>Send</button>
        </form>
    )
}

const ReduxSendMessageForm = reduxForm({form: 'sendMessage'})(SendMessageForm)

const SendMessage = (props) => {

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    return (
        <ReduxSendMessageForm onSubmit={addNewMessage}/>
    )
}

export default SendMessage;
