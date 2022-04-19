import MyPosts from './MyPosts.jsx';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReduser';




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
};



const MyPostsContainer = connect (mapStateToProps,{addPostActionCreator})(MyPosts);

export default MyPostsContainer;