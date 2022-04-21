import React from 'react';
import s from './MyPosts.module.css';
import NewPost from './NewPostForm/NewPost';
import Post from './Post/Post.jsx'




const MyPosts =  (props) => {
    console.log('RENDER')

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likes={p.likes} />)


    return (
        <div>
            <NewPost addPostActionCreator={props.addPostActionCreator}/>
            <div>
                {postsElements}
            </div>
        </div>
    );

}

export default MyPosts;