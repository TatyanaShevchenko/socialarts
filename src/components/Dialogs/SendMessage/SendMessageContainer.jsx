import React from "react";
import {sendMessage} from "../../../redux/dialogs-reducer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}


const SendMessageContainer  = connect(mapStateToProps, {sendMessage})(SendMessage);

export default SendMessageContainer;