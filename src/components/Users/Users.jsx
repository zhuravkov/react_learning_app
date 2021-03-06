import s from './Users.module.css';
import userPhoto from '.././123.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator';



let Users = (props) => {
       

        return (
            
            <div className={s.userClass} > 
                <Paginator totalUsersCount = {props.totalUsersCount} 
                            pageSize = {props.pageSize} 
                            currentPage = {props.currentPage} 
                            onPageChanged = {props.onPageChanged} />
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
                                        // кнопка не активна когда на нее нажали ушёл запрос, вернулся и обновился стэйт
                                        ? <button disabled={props.followingInProgress.some(id=>id === u.id) } onClick={() => {
                                            props.unfollow(u.id)

                                        }}>UnFollow</button>

                                        : <button disabled={props.followingInProgress.some(id=>id === u.id) } onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>}
                                </div>
                            </span>
                            <span className={s.user}>
                                <div>{u.name}</div>
                                {/* <button onClick={() => {
                                    folowingAPI.checkFollowingAPI(u.id)
                                        .then(data => { console.log(data) })
                                }}>GET</button> */}
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