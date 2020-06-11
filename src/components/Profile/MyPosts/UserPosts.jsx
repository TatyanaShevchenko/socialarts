import React from "react";
import style from "./UserPosts.module.css";
import Post from "./Post/Post";
import AddNewPostContainer from "./AddNewPost/AddNewPostContainer";


const UserPosts = React.memo(props => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post deletePost={props.deletePost} message={p.message} likesCount={p.likesCount} postId={p.id}/>)
    // let ReverseFunc = (Elements) => {
    //     const length = Elements.length;
    //     let Reverse = [];
    //     let j = 0;
    //     for (let i = length - 1; i >= 0; i--) {
    //         Reverse[j] = Elements[i];
    //         j += 1;
    //     }
    //     return Reverse;
    // }
    // let postsReverseElements = ReverseFunc(postsElements);

    return (
        <div className={style.myPosts}>
            <h4>My posts</h4>
            <AddNewPostContainer/>
            {postsElements}
        </div>
    );
}) ;

export default UserPosts;
