import React from "react";
import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <div>
            <NavLink to={"/dialogs/" + props.id}>
                <img className={style.dialogPhoto} src={props.photo} />
            </NavLink>
            </div>
            <div>
                <p className={style.dialogName}>{props.name}</p>
            </div>
        </div>
    )
}

export default DialogItem;
