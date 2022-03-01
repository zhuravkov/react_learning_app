
import { connect } from 'react-redux';
import Users from './Users';
import { followAC } from './../../redux/usersReduser';
import { unfollowAC } from './../../redux/usersReduser';
import { setUsersAC } from './../../redux/usersReduser';
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }

    }
}


export default  connect(mapStateToProps, MapDispatchToProps)(Users)