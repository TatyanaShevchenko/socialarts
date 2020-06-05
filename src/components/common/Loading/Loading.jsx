import React from "react";
import style from "./Loading.module.css";

const Loading =(props) =>{
    return(
        <div className={style.center}>
        <div className={style.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}

export default Loading;