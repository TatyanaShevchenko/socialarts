import React from "react";
import {requestFriends} from "../../../redux/users-reducer";
import {connect} from "react-redux";
import Friends from "./Friends";



class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.requestFriends();
    }

    render() {
        return (
            <Friends friends={this.props.friends} requestFriends={this.props.requestFriends}/>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        friends: state.usersPage.friends
    }
};



export default connect(mapStateToProps, {
    requestFriends
})
(FriendsContainer);