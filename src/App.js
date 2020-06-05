import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer"
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Footer from "./components/Footer/Footer";

const App = () => {
    return ( <
        div className = "app-wrapper" >
        <
        HeaderContainer / >
        <
        div className = "container-main" >
        <
        div className = "grid__container-main" >
        <
        NavbarContainer / >
        <
        div className = "grid__container-content" >
        <
        Route path = "/dialogs"
        render = {
            () => < DialogsContainer / > }
        /> <
        Route path = "/profile/:userId?"
        render = {
            () => < ProfileContainer / > }
        /> <
        Route path = "/news"
        render = {
            () => < News / > }
        /> <
        Route path = "/music"
        render = {
            () => < Music / > }
        /> <
        Route path = "/users"
        render = {
            () => < UsersContainer / > }
        /> <
        Route path = "/settings"
        render = {
            () => < Settings / > }
        /> <
        Route path = "/login"
        render = {
            () => < LoginPage / > }
        /> <
        /div> <
        /div> <
        /div>

        <
        Footer / >
        <
        /div>


    );
}

export default App;