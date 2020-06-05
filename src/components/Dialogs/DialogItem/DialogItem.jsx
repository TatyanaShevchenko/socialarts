import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/" + props.id}>
                <img className={style.dialogPhoto} src={props.photo} />
                <p className={style.dialogName}>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default DialogItem;
