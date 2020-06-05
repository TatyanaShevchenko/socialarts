import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessageContainer from "./SendMessage/SendMessageContainer";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} photo={d.photo}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div className={style.addnewmessage}>
                <SendMessageContainer newMessageText={props.newMessageText}/>
            </div>
        </div>
    );
};

export default Dialogs;
