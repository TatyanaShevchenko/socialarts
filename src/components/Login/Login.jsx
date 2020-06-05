import React from "react";
import style from "./Login.module.css";
import {reduxForm} from "redux-form";


let LoginForm = (props) => {
    return (
        <form className={style.loginForm}>
            <input className={style.input} placeholder={"Login"}/>
            <input className={style.input} placeholder={"Password"}/>
            <div className={style.label}><input className={style.input + ' ' + style.checkbox} type={"checkbox"}/>remember
                me
            </div>
            <button className={style.btn}>Login</button>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    return (
        <div className={style.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm />
        </div>
    )
}

export default Login;

