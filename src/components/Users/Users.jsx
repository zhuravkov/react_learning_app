import s from './Users.module.css';
import userPhoto from '.././123.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
        let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i)
        }
        return (
            <div className={s.userClass} > 

                <div>
                    {pages.map(p => {
                        return <span className={ props.currentPage===p ? s.selectedPaje : ''} 
                        onClick={(e)=>{ props.onPageChanged(p) }  }>{p}</span>
                    })}
                </div>


            {
                props.users.map(u => {
                    return (
                        <div key={u.testId} >
                            <span className={s.user}>
                                <div>
                                    <NavLink to = {'/profile/'+ u.id}>
                                        <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt="userPhoto" />
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            axios.delete (`http://localhost:8000/api/follow/${u.id}`, {
                                                withCredentials: true
                                            })

                                                .then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                })
                                            }}>UnFollow</button>


                                        : <button onClick={() => {

                                            axios.post(`http://localhost:8000/api/follow/${u.id}`, {}, {
                                                withCredentials: true
                                            })

                                                .then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.follow(u.id)
                                                    }
                                                })


                                        }}>Follow</button>}
                                    
                                </div>
                            </span>
                            <span className={s.user}>
                                <div>{u.name}</div>
                                <button onClick={() => {

                                    axios.get(`http://localhost:8000/api/follow/${u.id}`, {
                                        withCredentials: true
                                    })
                                        .then(response => {
                                            console.log(response)
                                        })
                                }}>GET</button>

                                <div>{u.status}</div>
                            </span>
                        </div>
                    )
                })
            }
            </div>
        )
    } 


export default Users