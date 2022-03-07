import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '.././123.png'
import React from 'react';



//Создали классовую компоненту (старый формат)

class Users extends React.Component {
    constructor (props) {
        super(props);
        //убрали запрос на сервер в конструктор так как он вызывается 1 раз при создании объекта
        alert("NEW") //со strictMode 2 раза????
        axios.get('http://localhost:8000/api/').then(response =>{
                this.props.setUsers(response.data)
            })
    }



    // getUsers = () =>{    // новый способ объявления метода, не теряется контекст вызова(this)
    //     if (this.props.users.length === 0) {
    //         axios.get('http://localhost:8000/api/').then(response =>{
                
    //             this.props.setUsers(response.data)
    //         })
    //     }
    // }

    render() { 
        return   <div className={s.userClass} >
                {/* <button onClick={ this.getUsers } >GET USERS</button> */}
                {
                this.props.users.map(u => {
                    return (
                        <div key={u.testId} >
                            <span className={s.user}>
                                <div>
                                    <img src={u.photoUrl !=null ? u.photoUrl : userPhoto } alt="userPhoto" />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { this.props.unfollow(u.testId) }} >UnFollow</button>
                                        : <button onClick={() => { this.props.follow(u.testId) }} >Follow</button>
                                    }
                                </div>
                            </span>
                            <span className={s.user}>
                                <div>{u.firstName}</div>
                                <div>{u.status}</div>
                            </span>
                        </div>
                    )
                })}
            </div>
        
    }
}



export default Users