import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth})
// ХОК который принимает компонету, создает контейнер над ней, 
// конектит к стору и выдаёт готовую контейнерную с нужным функционалом
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component  {
        render(){
        if (!this.props.isAuth) return <Navigate replace to="/login" />
        return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
