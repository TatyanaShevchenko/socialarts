import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
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
import {connect} from "react-redux";
import {compose} from "redux";

import Loading from "./components/common/Loading/Loading";
import {initializeApp} from "./redux/app-reducer";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (! this.props.initialized)
        {return <Loading/>}
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="container-main">
                    <div className="grid__container-main">
                        <NavbarContainer/>
                        <div className="grid__container-content">
                            <Route path="/dialogs"
                                   render={() => < DialogsContainer/>}/>
                            <Route path="/profile/:userId?"
                                   render={() => < ProfileContainer/>}/>

                            <Route path="/news"
                                   render={() => < News/>}/>
                            <Route path="/music"
                                   render={() => < Music/>}/>
                            <Route path="/users"
                                   render={() => < UsersContainer/>}/>
                            <Route path="/settings"
                                   render={() => < Settings/>}/>
                            <Route path="/login"
                                   render={() => < LoginPage/>}/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
