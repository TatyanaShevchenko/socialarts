import React from "react";
import style from "./AddNewPost.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import Button from '@material-ui/core/Button';


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
        <Button type="submit" variant="contained" color="primary">
            Add post
        </Button>
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
