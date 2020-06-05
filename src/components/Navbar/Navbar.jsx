import React from "react";
import style from './Navbar.module.css';
import Menu from "./Menu/Menu";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <div className={style.nav}>
            <Menu />
            <Friends friends={props.friends}/>
        </div>

    );
};

export default Navbar;
