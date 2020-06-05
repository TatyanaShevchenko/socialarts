import React from "react";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowInProgress,
    toggleIsFetching,
    unfollow,
    getUsers, followSuccess, unfollowSuccess
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Loading from "../common/Loading/Loading";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Loading/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                             pageSize={this.props.pageSize}
                                                             currentPage={this.props.currentPage}
                                                             onPageChanged={this.onPageChanged}
                                                             users={this.props.users}
                                                             follow={this.props.follow}
                                                             unfollow={this.props.unfollow}
                                                             followInProgress={this.props.followInProgress}

                />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowInProgress,
    getUsers
}))
(UsersContainer);