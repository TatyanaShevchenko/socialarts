import React from "react";
import style from './Navbar.module.css';
import Menu from "./Menu/Menu";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {
    return (
        <div className={style.nav}>
            <Menu />
            <FriendsContainer friends={props.friends}/>
        </div>

    );
};

export default Navbar;
