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
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';


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
        users: getUsers (state),
        pageSize: getPageSize (state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state), 
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose (
    
    connect(mapStateToProps, {follow, unfollow, setCurrentPage,
        getUsersThunkCreator }),
    withAuthRedirect   
)(UsersContainer)


// export default  connect(mapStateToProps, {follow, unfollow, setCurrentPage,
//      getUsersThunkCreator })(UsersContainer)