import React, {Component, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer"
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Loading from "./components/common/Loading/Loading";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import Welcome from "./components/Welcome/Welcome";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));
const MusicContainer = React.lazy(() => import('./components/Music/MusicContainer'));

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
                                   render={() => <Welcome/>}/>
                            <Route path="/dialogs"
                                   render={withSuspense(DialogsContainer)}/>
                            <Route path="/profile/:userId?"
                                   render={withSuspense(ProfileContainer)}/>
                            <Route path="/news"
                                   render={withSuspense(NewsContainer)}/>
                            <Route path="/music"
                                   render={withSuspense(MusicContainer)}/>
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
