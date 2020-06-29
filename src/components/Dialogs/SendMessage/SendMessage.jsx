import React from "react";
import style from "./SendMessage.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import Button from '@material-ui/core/Button';

const maxLength50 = maxLengthCreator(50);
const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.addMessage}>
            <Field placeholder="Enter your message"
                   name="newMessageBody"
                   component={Textarea}
                   validate={[requiredField, maxLength50]}/>
            <Button type="submit" variant="contained" color="primary"
                className={style.btn}>Send</Button>
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
