import React from "react";
import style from "./SendMessage.module.css";

const SendMessage = (props) => {

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={style.addMessage}>
            <textarea onChange={onNewMessageChange} value={props.newMessageText} placeholder='Enter your message'/>
            <button onClick={onSendMessageClick}>Send</button>
        </div>

    )
}

export default SendMessage;
