import * as axios from 'axios';
import React from 'react';

import { connect } from 'react-redux';
import Users from './Users';
import { followAC } from './../../redux/usersReduser';
import { unfollowAC } from './../../redux/usersReduser';
import { setUsersAC } from './../../redux/usersReduser';
import { setCurrentPageAC } from './../../redux/usersReduser';
import { setTotalUsersCountAC } from './../../redux/usersReduser';


class UsersContainer extends React.Component{
    componentDidMount = () => {
        axios.get(`http://localhost:8000/api/users?page=${this.props.currentPage}&on_page=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalUsersCount(response.data.count)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8000/api/users?page=${pageNumber}&on_page=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users)
        })        
    }


    render () {
        return <Users 
        users = {this.props.users}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        onPageChanged =  {this.onPageChanged}
        totalUsersCount = {this.props.totalUsersCount}
        />
    } 
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage
    }
}


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
        }

    }
}


export default  connect(mapStateToProps, MapDispatchToProps)(UsersContainer)