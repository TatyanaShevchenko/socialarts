import React, {useState, useEffect} from "react";
import style from "./AboutUser.module.css";


const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false);
    //возвращает массив из 2х элементов - значение и функция
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( ()=>{
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div className={style.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input className={style.statusInput}
                       onBlur={deactivateEditMode}
                       autoFocus={true}
                       onChange={onStatusChange}
                       value={status} />
            </div>
            }
        </div>
    )
}



export default ProfileStatusWithHooks;
