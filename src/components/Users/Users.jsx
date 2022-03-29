import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '.././123.png'
import React from 'react';

class Users extends React.Component{
    componentDidMount = () => {
        axios.get(`http://localhost:8000/api/users?page=${this.props.currentPage}&on_page=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalUsersCount(response.data.count)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8000/api/users?page=${pageNumber}&on_page=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users)
        })        
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i)
        }
        return (
            <div className={s.userClass} > 

                <div>
                    {pages.map(p => {
                        return <span className={ this.props.currentPage===p ? s.selectedPaje : ''} 
                        onClick={(e)=>{ this.onPageChanged(p) }  }>{p}</span>
                    })}
                </div>


            {
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