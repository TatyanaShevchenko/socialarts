import React from "react";
import style from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";


let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm}>
            <Field
                className={style.input}
                placeholder="Login"
                name="login"
                validate={[requiredField]}
                component={Input}/>
            <Field
                className={style.input}
                placeholder="Password"
                name="password"
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
            <button className={style.btn}>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const submit=(formData)=>{
        console.log(formData)
    }
    return (
        <div className={style.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    )
}

export default Login;

