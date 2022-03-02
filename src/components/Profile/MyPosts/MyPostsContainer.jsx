import React from 'react';


import { addPostActionCreator } from '../../../redux/profileReduser.js';
import { updateNewPostActionCreator } from '../../../redux/profileReduser.js';
import MyPosts from './MyPosts.jsx';
import { connect } from 'react-redux';



// const MyPostsContainerLast = (props) => {
 
//     let state = props.store.getState()

//     let onAddPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };

//     let onNewPostTextUpdate = (text) => {
//         let action = updateNewPostActionCreator(text)
//         props.store.dispatch(action);
//     }
//     return <MyPosts newPostText = { state.profilePage.newPostText }
//                     posts = {state.profilePage.posts}
//                     updateNewPostText = {onNewPostTextUpdate}
//                     addNewPost = {onAddPost}  />;

// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator());
        },
        onNewPostTextUpdate: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;