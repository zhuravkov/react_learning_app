import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '.././123.png'
import React from 'react';

class Users extends React.Component{
    componentDidMount = () => {
        axios.get('http://localhost:8000/api/users').then(response => {
            this.props.setUsers(response.data)
        })
    }

    render() {
        return (
            <div className={s.userClass} > {
                this.props.users.map(u => {
                    return (
                        <div key={u.testId} >
                            <span className={s.user}>
                                <div>
                                    <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt="userPhoto" />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { this.props.unfollow(u.id) }} >UnFollow</button>
                                        : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>
                                    }
                                </div>
                            </span>
                            <span className={s.user}>
                                <div>{u.firstName}</div>
                                <div>{u.status}</div>
                            </span>
                        </div>
                    )
                })
            }
            </div>
        )
    } 
}

export default Users