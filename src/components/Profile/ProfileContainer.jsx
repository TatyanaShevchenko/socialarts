import React from "react";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getFollowInProgress} from "../../selectors/users-selector";
import {follow, requestFriends, unfollow} from "../../redux/users-reducer";


class ProfileContainer extends React.Component {
     refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId)
        {
            if (this.props.isAuth){
                userId = this.props.authorizedUserId;
            } else {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
        this.props.requestFriends();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !=prevProps.match.params.userId ){
            this.refreshProfile();
        }
        if (prevProps.status !== this.props.status)
        {this.setState({
            status: this.props.status
        });}

        if (prevProps.match.params.userId !== this.props.match.params.userId)
        {this.setState({
            profile: this.props.profile
        });}
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     userId = {this.props.match.params.userId}
                     authorizedUserId={this.props.authorizedUserId}
                     friends={this.props.friends}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
                     followInProgress={this.props.followInProgress}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth:state.auth.isAuth,
    friends: state.usersPage.friends,
    followInProgress: getFollowInProgress(state)
});

export default compose(
    connect(mapStateToProps,
        {getUserProfile,
            getStatus,
            updateStatus,
            follow,
            unfollow,
            requestFriends,
            savePhoto,
            saveProfile
        }),
    withRouter,
    // withAuthRedirect
)
(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent);