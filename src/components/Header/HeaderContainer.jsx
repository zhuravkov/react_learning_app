
import Header from './Header';
import React from 'react';

import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReduser';
import { authAPI } from '../../api/api';


class HeaderContainer extends React.Component {

    componentDidMount (){
        // убрали запрос к серверу в api.js
        authAPI.authMe()
        .then(data => {
            if (data.resultCode ===0 ) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, login, email);
            }
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