import React from "react";
import {connect} from "react-redux";
import UserPosts from "../UserPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const UserPostsContainer  = connect(mapStateToProps)(UserPosts);

export default UserPostsContainer;
