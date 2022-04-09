
import Header from './Header';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReduser';


class HeaderContainer extends React.Component {

    componentDidMount (){
        
        axios.get(`http://localhost:8000/api/auth/me`, {        
        withCredentials: true
    })
        .then(response => {
            if (response.data.resultCode ===0 ) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email);
            }
            // this.props.setUsers(response.data.users);
            // this.props.setTotalUsersCount(response.data.count)
        })
    }

    render () {
    return <Header {...this.props}/>   
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);