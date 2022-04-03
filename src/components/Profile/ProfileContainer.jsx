
import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReduser';



class ProfileContainer extends React.Component  {

    componentDidMount () {
        axios.get(`http://localhost:8000/api/profile/1`).then(response => {

            this.props.setUserProfile(response.data);

        })
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

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)