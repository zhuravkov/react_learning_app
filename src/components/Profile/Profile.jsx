import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts state={ props.state }
                     addPost = { props.addPost }
                     updateNewPostText = {props.updateNewPostText} />
        </div>
    );
}

export default Profile