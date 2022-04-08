
import Header from './Header';
import React from 'react';
import * as axios from 'axios';


class HeaderContainer extends React.Component {

    componentDidMount (){
        
        axios.get(`http://localhost:8000/api/auth/me/2`, {        
        withCredentials: true
    })
        .then(response => {

            // this.props.setUsers(response.data.users);
            // this.props.setTotalUsersCount(response.data.count)
        })
    }

    render () {
    return <Header {...this.props}/>   
    }
}

export default HeaderContainer