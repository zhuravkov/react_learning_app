import * as axios from 'axios';
import React from 'react';

import { connect } from 'react-redux';
import Users from './Users';
import { follow } from './../../redux/usersReduser';
import { unfollow } from './../../redux/usersReduser';
import { setUsers } from './../../redux/usersReduser';
import { setCurrentPage } from './../../redux/usersReduser';
import { setTotalUsersCount } from './../../redux/usersReduser';
import { toggleIsFething } from './../../redux/usersReduser';
import Preloader from '../common/Preloader';
import { usersAPI } from '../../api/api.js';



class UsersContainer extends React.Component{
    componentDidMount = () => {
        this.props.toggleIsFething(true);
        // обращаемся в DAL вместо сервера и там выполняется запрос, сюда возвращается только data
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFething(false);
            this.props.setUsers(data.users);
            this.props.setTotalUsersCount(data.count)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFething(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFething(false);
            this.props.setUsers(data.users)
        })        
    }


    render () {
        return <>
        
        { this.props.isFetching ? <Preloader/> : null }
        
        <Users 
        users = {this.props.users}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        onPageChanged =  {this.onPageChanged}
        totalUsersCount = {this.props.totalUsersCount}
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
        isFetching : state.usersPage.isFetching
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

export default  connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,toggleIsFething,})(UsersContainer)