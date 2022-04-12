
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { userProfileThunk } from '../../redux/profileReduser';
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';


// ВМЕСТО убранного withRouter чтобы работало , разобраться как без этого
const withRouter = (WrappedComponent) => (props) => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
  
    return (
      <WrappedComponent
        {...props}
        params={params}
        // etc...
      />
    );
  }; 



class ProfileContainer extends React.Component  {
    
    
    componentDidMount () {
        let userId = this.props.params.userId


        if (!this.props.params.userId) {
            userId = 5 }

        this.props.userProfileThunk(this.props.params.userId)
    }


    render() {
        if (!this.props.isAuth) return <Navigate replace to="/login" />
        return (
            <div>
               {/* Передаем все props дальше <Profile {...this.props} profile = {this.props.profile} */}
                <Profile {...this.props} /> 

            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let  WithUrlDataContainerComponent = withRouter (ProfileContainer)

export default connect (mapStateToProps, {userProfileThunk}) (WithUrlDataContainerComponent)