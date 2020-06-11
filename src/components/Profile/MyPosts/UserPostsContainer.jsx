import React from "react";
import {connect} from "react-redux";
import UserPosts from "./UserPosts";
import {deletePost} from "../../../redux/profile-reducer";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const UserPostsContainer  = connect(mapStateToProps, {deletePost})(UserPosts);

export default UserPostsContainer;