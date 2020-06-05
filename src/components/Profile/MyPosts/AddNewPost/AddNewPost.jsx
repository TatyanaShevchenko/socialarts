import React from "react";
import style from "./AddNewPost.module.css";

const AddNewPost = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (
        <div className={style.AddNewPost}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={onAddPost}>Add post</button>
        </div>
    );
};

export default AddNewPost;
