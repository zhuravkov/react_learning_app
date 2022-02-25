import React from 'react';


import { addPostActionCreator } from '../../../redux/profileReduser.js';
import { updateNewPostActionCreator } from '../../../redux/profileReduser.js';
import MyPosts from './MyPosts.jsx';



const MyPostsContainer = (props) => {
 
    let state = props.store.getState()

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onNewPostTextUpdate = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action);
    }
    return <MyPosts newPostText = { state.profilePage.newPostText }
                    posts = {state.profilePage.posts}
                    updateNewPostText = {onNewPostTextUpdate}
                    addNewPost = {onAddPost}  />;

}

export default MyPostsContainer;