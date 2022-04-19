
import Header from './Header';
import React from 'react';

import { connect } from 'react-redux';

import { authUserThunk,logoutThunk } from './../../redux/authReduser';


class HeaderContainer extends React.Component {
    
    componentDidMount (){

        // Вся логика в САНКЕ
        this.props.authUserThunk()
    }

    render () {
    return <Header {...this.props}/>   
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect (mapStateToProps, {authUserThunk, logoutThunk }) (HeaderContainer);