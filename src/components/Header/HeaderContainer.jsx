
import Header from './Header';
import React from 'react';

import { connect } from 'react-redux';

import { authUserThunk } from './../../redux/authReduser';


class HeaderContainer extends React.Component {
    
    componentDidMount (){

        // Вся логика в САНКЕ
        this.props.authUserThunk()

        // убрали запрос к серверу в api.js
        // authAPI.authMe()
        // .then(data => {
        //     if (data.resultCode ===0 ) {
        //         let {id, login, email} = data.data
        //         this.props.setAuthUserData(id, login, email);
        //     }
        // })
    }

    render () {
    return <Header {...this.props}/>   
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect (mapStateToProps, {authUserThunk}) (HeaderContainer);