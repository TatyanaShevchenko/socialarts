import React from "react";
import style from "./AboutUser.module.css";

class PhotoUploader extends React.Component {

    mainPhotoSelected(e) {
        if (e.target.files.length) {
            this.props.savePhoto(e.target.files[0]);
        }
    }
    render() {
        debugger;
        return <div
            className={style.upload}>

            <input type={"file"}
                   onChange={this.mainPhotoSelected}
                   id="photo_uploads"
                   accept=".jpg, .jpeg, .png"/>

        </div>
    }
}

export default PhotoUploader;
