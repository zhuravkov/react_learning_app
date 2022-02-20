import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'




const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />)


    let onAddPost = () => {
        props.addNewPost();
    };

    let onNewPostTextUpdate = (e) => {
        let text = e.target.value ;
        props.updateNewPostText (text) ;
    }
  
    return (
        <div>
            <div>
                <textarea  onChange={onNewPostTextUpdate} value={props.newPostText} cols="60" rows="10"></textarea>
            </div>
            <div>
                <button onClick={onAddPost} > Добавить пост </button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );

}

export default MyPosts;