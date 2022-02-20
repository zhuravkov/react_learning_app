import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1bea74a702e1cd18db666d435af45ce6019941c_medium.jpg" alt="" />
            {props.message}
            <div>
                <span>likes: {props.likes}</span>
            </div>
        </div>
    )
}

export default Post