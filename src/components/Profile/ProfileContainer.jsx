
import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReduser';
import { useLocation, useParams } from "react-router-dom";
import { profileAPI, authAPI } from '../../api/api';


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
            userId = 5
            // // TODO!!!!
            // authAPI.authMe()
            //     .then (data => {
            //         if (data.resultCode ===0 ) {
            //         userId = data.data.id
            //         profileAPI.usersProfile(userId)
            //             .then(data => {
            //             this.props.setUserProfile(data)})
            //     }})
                }

        profileAPI.usersProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)})
    }


    render() {
        return (
            <div>
               {/* Передаем все props дальше <Profile {...this.props} profile = {this.props.profile} */}
                <Profile {...this.props} /> 

            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
});

let  WithUrlDataContainerComponent = withRouter (ProfileContainer)

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)