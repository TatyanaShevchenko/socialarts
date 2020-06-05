import React from "react";
import style from "./Login.module.css";
import {Field, reduxForm} from "redux-form";


let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm}>
            <Field className={style.input} placeholder={"Login"} name={"login"} component={"input"}/>
            <Field className={style.input} placeholder={"Password"}name={"password"} component={"input"}/>
            <div className={style.label}>
                <Field className={style.input + ' ' + style.checkbox} name={"rememberMe"} type={"checkbox"} component={"input"}/>
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

