import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";



const Header = (props) => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__inner}>
          <div>
          <div className={style.header__icon}>
            <a className={style.header__icon_link} href="/profile"></a>
            </div>
          <div className={style.header__title}>
            <a href="/profile">
              Social<span>Arts</span>
            </a>
          </div>
          </div>

          <div>
            {props.isAuth
                ? <div className={style.loginBlock}><p className={style.loginP}>{props.login}</p><button className={style.logoutBtn} onClick={props.logoutThunkCreator}>Log Out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
