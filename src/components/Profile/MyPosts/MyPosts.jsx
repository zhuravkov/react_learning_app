import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(p=><Post message ={p.message} likes={p.likes} />)

    let newPostElement = React.createRef();

    let addPost = () =>{
        props.addPost();
                                    //обнуляет текст  если в бизнесе нет возможности       props.updateNewPostText(''); но не так newPostElement.current.value = ''; 
    };

    let newPostText = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    
    return (
        <div>
            <div>
                <textarea ref={ newPostElement } onChange={ newPostText } value={ props.state.newPostText } cols="60" rows="10"></textarea>
            </div>
            <div>
                <button onClick={ addPost } > Добавить пост </button>    
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    );

}

export default MyPosts