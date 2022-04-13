
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { userProfileThunk } from '../../redux/profileReduser';
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


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

        this.props.userProfileThunk(userId)
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
    profile:state.profilePage.profile,
});
// compose поочереди оборачивает в хоки конечную компоненту в 1 месте
export default compose(
    withAuthRedirect,
    withRouter,
    connect (mapStateToProps, {userProfileThunk})
)(ProfileContainer)



// Оборачиваем в ХОК
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let  WithUrlDataContainerComponent = withRouter (AuthRedirectComponent)
// export default connect (mapStateToProps, {userProfileThunk}) (WithUrlDataContainerComponent)