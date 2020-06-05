import React from "react";
import style from './Menu.module.css';
import {NavLink} from "react-router-dom";

let classNames = require('classnames');
const Menu = () => {
    return (
            <nav>
                <ul>
                    <li className={classNames(style.item, style.profile)}><NavLink to="/profile/">Profile</NavLink></li>
                    <li className={classNames(style.item, style.message)}><NavLink to="/dialogs">Messages</NavLink></li>
                    <li className={classNames(style.item, style.news)}><NavLink to="/news">News</NavLink></li>
                    <li className={classNames(style.item, style.music)}><NavLink to="/music">Music</NavLink></li>
                    <li className={classNames(style.item, style.settings)}><NavLink to="/settings">Settings</NavLink></li>
                    <li className={classNames(style.item, style.findfriends)}><NavLink to="/users">Find new friends</NavLink></li>
                </ul>
            </nav>
    );
};

export default Menu;
