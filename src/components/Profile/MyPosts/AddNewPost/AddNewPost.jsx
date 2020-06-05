import React from "react";
import style from "./AddNewPost.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";


const maxLength15 = maxLengthCreator(15)
const AddNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit} className={style.AddNewPost}>
        <Field
            placeholder="Enter your post"
            name="newPostBody"
            component={Textarea}
            validate={[requiredField, maxLength15]}
        />
        <button className={style.btn}>Add post</button>
    </form>
)
}

const ReduxAddNewPostForm = reduxForm({form: 'newPost'})(AddNewPostForm);

const AddNewPost = (props) => {

    const addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }
    return (
        <ReduxAddNewPostForm onSubmit={addNewPost}/>
    );
};

export default AddNewPost;
