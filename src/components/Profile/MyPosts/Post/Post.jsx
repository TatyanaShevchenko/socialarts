import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    const deletePost = (postId) => {
        postId = props.postId;
        props.deletePost(postId);
    }
    return (
        <div className={style.postWrapper}>
            <div className={style.item}>
                <img src="https://sun9-33.userapi.com/c849128/v849128465/13f0fd/UWxEmb_UpiA.jpg" alt="avatarMini"></img>
                <div className={style.text}>{props.message}</div>
                <div className={style.likes}><span> {props.likesCount}</span></div>
            </div>
            <button onClick={deletePost} className={style.deletePost}>Delete post</button>
        </div>
    );
};

export default Post;
