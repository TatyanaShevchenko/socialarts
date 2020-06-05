import React from "react";
import {addPost} from "../../../../redux/profile-reducer";
import AddNewPost from "./AddNewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        newPostText: state.profilePage.newPostText
    }
}

const AddNewPostContainer = connect(mapStateToProps, {addPost})(AddNewPost);

export default AddNewPostContainer;
