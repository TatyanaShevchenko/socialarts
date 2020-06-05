import React from "react";
import {addPost, updateNewPostText} from "../../../../redux/profile-reducer";
import AddNewPost from "./AddNewPost";
import {connect} from "react-redux";




let mapStateToProps = (state) =>{
    return {
        newPostText: state.profilePage.newPostText
    }
}

const AddNewPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(AddNewPost);

export default AddNewPostContainer;
