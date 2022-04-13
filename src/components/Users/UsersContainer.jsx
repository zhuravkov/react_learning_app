import React from 'react';

import { connect } from 'react-redux';
import Users from './Users';
import { follow } from './../../redux/usersReduser';
import { unfollow } from './../../redux/usersReduser';
import { setCurrentPage } from './../../redux/usersReduser';

import Preloader from '../common/Preloader';
import { getUsersThunkCreator } from './../../redux/usersReduser';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class UsersContainer extends React.Component{
    componentDidMount = () => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);}


    render () {
        return <>
        
        { this.props.isFetching ? <Preloader/> : null }
        
        <Users 
        users = {this.props.users}
        pageSize = {this.props.pageSize}
        totalUsersCount = {this.props.totalUsersCount}
        currentPage = {this.props.currentPage}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        onPageChanged =  {this.onPageChanged}
        followingInProgress= {this.props.followingInProgress}
        />
        </>
    } 
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

/*
let MapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
           
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch( unfollowAC(userId));
        },
        setUsers: (users) => {
            
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFething: (isFetching) => {
            dispatch(toggleIsFethingAC(isFetching))
        }

    }
}
*/
export default compose (
    
    connect(mapStateToProps, {follow, unfollow, setCurrentPage,
        getUsersThunkCreator }),
    withAuthRedirect   
)(UsersContainer)


// export default  connect(mapStateToProps, {follow, unfollow, setCurrentPage,
//      getUsersThunkCreator })(UsersContainer)