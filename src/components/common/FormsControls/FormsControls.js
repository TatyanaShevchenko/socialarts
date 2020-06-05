import React from "react";
import style from './FormsControls.module.css';
import errorImage from "../../../images/error.png";


export const Textarea =({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.divStyleTextarea+' '+(hasError? style.error : "")}>
            <textarea  {...input} {...props}/>
            {hasError && <p className={style.redText}><span><img className={style.errorImageTA} src={errorImage}/></span>{meta.error}</p>}
        </div>
    )
}

export const Input =({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.divStyleInput+' '+(hasError? style.error : "")}>
            <input  {...input} {...props}/>
            {hasError && <p className={style.whiteText+' '+style.leftAlert}><span><img className={style.errorImageInp} src={errorImage}/></span>{meta.error}</p>}
        </div>
    )
}

export const Checkbox =({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError? style.error : ""}>
            <input  {...input} {...props}/>
            {hasError && <p className={style.whiteText+' '+style.leftAlert}><span><img className={style.errorImageInp} src={errorImage}/></span>{meta.error}</p>}
        </div>
    )
}