import React from "react";
import style from "./Login.module.css";
import formStyle from "../common/FormsControls/FormsControls.module.css"
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import Button from '@material-ui/core/Button';



let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm}>
            <Field
                className={style.input}
                placeholder="Email"
                name="email"
                validate={[requiredField]}
                component={Input}/>
            <Field
                className={style.input}
                placeholder="Password"
                name="password"
                type="password"
                validate={[requiredField]}
                component={Input}/>
            <div className={style.label}>
                <Field
                    className={style.input + ' ' + style.checkbox}
                    name="rememberMe"
                    type="checkbox"
                    component={Checkbox}/>
                remember me
            </div>
            {props.error ? <div className={formStyle.divError}>{props.error}</div> : ""}
            <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const submit=(formData)=>{
        props.loginThunkCreator(formData.email,formData.password, formData.rememberMe )
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div className={style.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    )
}

const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginThunkCreator})(Login);

