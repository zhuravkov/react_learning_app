import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 5, photoUrl: 'https://avatars.mds.yandex.net/i?id=526a043ba583e8d38fc93b504db7e4f9-5450165-images-thumbs&n=13',
                followed: true, fullName: 'Dmitry', status: 'I am a BOSS 5', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 6, photoUrl: 'https://avatars.mds.yandex.net/i?id=526a043ba583e8d38fc93b504db7e4f9-5450165-images-thumbs&n=13',
                followed: false, fullName: 'Sergey', status: 'I am a BOSS 6', location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 7, photoUrl: 'https://avatars.mds.yandex.net/i?id=526a043ba583e8d38fc93b504db7e4f9-5450165-images-thumbs&n=13',
                followed: true, fullName: 'Ivan', status: 'I am a BOSS 7', location: { city: 'Berlin', country: 'Germany' }
            }
        ]
        )
    }

    return (
        <div className={s.userClass} >{
            props.users.map(u => {
                return (
                    <div key={u.id} >
                        <span className={s.user}>
                            <div>
                                <img src={u.photoUrl} alt="userPhoto" />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }} >UnFollow</button>
                                    : <button onClick={() => { props.follow(u.id) }} >Follow</button>
                                }
                            </div>
                        </span>
                        <span className={s.user}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}


export default Users