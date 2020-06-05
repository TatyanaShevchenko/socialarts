import React from "react";
import style from "./SendMessage.module.css";
import {Field, reduxForm} from "redux-form";

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.addMessage}>
            <Field placeholder={"Enter your message"} name={"newMessageBody"} component={"textarea"}/>
            <button>Send</button>
            {/*<textarea onChange={onNewMessageChange} value={props.newMessageText} placeholder='Enter your message'/>*/}
            {/*<button onClick={onSendMessageClick}>Send</button>*/}
        </form>
    )
}

const ReduxSendMessageForm = reduxForm({form: 'sendMessage'})(SendMessageForm)

const SendMessage = (props) => {
    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };
    const addNewMessage = (values) => {
        // alert(values.newMessageBody);
        props.sendMessage(values.newMessageBody);
    }
    return (
        <ReduxSendMessageForm onSubmit={addNewMessage}/>
    )
}

export default SendMessage;
