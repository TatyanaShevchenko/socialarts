import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer"
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Loading from "./components/common/Loading/Loading";
import {initializeApp} from "./redux/app-reducer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import store from "./redux/redux-store";
import Welcome from "./components/Welcome/Welcome";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loading/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="container-main">
                    <div className="grid__container-main">
                        <NavbarContainer/>
                        <div className="grid__container-content">
                            <Route exact path="/"
                                   render={() => <Welcome />}/>
                            <Route path="/dialogs"
                                   render={() => < DialogsContainer/>}/>
                            <Route path="/profile/:userId?"
                                   render={() => < ProfileContainer/>}/>

                            <Route path="/news"
                                   render={() => < NewsContainer/>}/>
                            <Route path="/music"
                                   render={() => < MusicContainer/>}/>
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

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialArtsApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SocialArtsApp;
