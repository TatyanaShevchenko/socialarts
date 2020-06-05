import React from "react";
import style from "./UserPosts.module.css";
import Post from "./Post/Post";
import AddNewPost from "./AddNewPost/AddNewPost";
import AddNewPostContainer from "./AddNewPost/AddNewPostContainer";


const UserPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let ReverseFunc = (Elements) => {
        const length = Elements.length;
        let Reverse =[];
        let j = 0;
        for (let i = length-1; i>=0; i--){
            Reverse[j]=Elements[i];
            j += 1;
        }
        return Reverse;
    }
    let postsReverseElements = ReverseFunc(postsElements);

    return (
        <div className={style.myPosts}>
            <h4>My posts</h4>
            <AddNewPostContainer/>
            {postsReverseElements}
        </div>
    );
};

export default UserPosts;
