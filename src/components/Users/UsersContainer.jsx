
import { connect } from 'react-redux';
import Users from './Users';
import { followAC } from './../../redux/usersReduser';
import { unfollowAC } from './../../redux/usersReduser';
import { setUsersAC } from './../../redux/usersReduser';
import { setCurrentPageAC } from './../../redux/usersReduser';
import { setTotalUsersCountAC } from './../../redux/usersReduser';


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


export default  connect(mapStateToProps, MapDispatchToProps)(Users)