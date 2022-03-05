import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '.././123.png'

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('http://localhost:8000/api/').then(response =>{
            debugger
            props.setUsers(response.data)
        })
    }

    return (
        <div className={s.userClass} >{
            props.users.map(u => {
                return (
                    <div key={u.testId} >
                        <span className={s.user}>
                            <div>
                                <img src={u.photoUrl !=null ? u.photoUrl : userPhoto } alt="userPhoto" />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.testId) }} >UnFollow</button>
                                    : <button onClick={() => { props.follow(u.testId) }} >Follow</button>
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
    )
}


export default Users