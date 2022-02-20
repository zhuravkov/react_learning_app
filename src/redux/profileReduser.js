const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

// ПОСТЫ
export let addPostActionCreator= () => ({type: ADD_POST});
export let updateNewPostActionCreator= (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newPostText: text});


let initialState = {
    
        newPostText: 'Новый пост',
        posts: [
            { id: '1', message: 'Hy man', likes: '15' },
            { id: '2', message: 'Привет', likes: '13' },
            { id: '3', message: 'Как дела?', likes: '12' },
            { id: '4', message: 'Ты тут', likes: '43' },
            { id: '5', message: 'Новый пост', likes: '16' },
            { id: '6', message: 'Привет из Index.JS', likes: '100' },
            { id: '7', message: 'Привет\nиз STATE.JS', likes: '20' }
        ]

    }


//Павильный код

const profileReduser = (state=initialState,action) =>{

    switch (action.type){
    
        case ADD_POST:
            let newPost = {
                id: "8",
                message: state.newPostText,
                likes: "0"
            };
            state.posts.push(newPost);
            state.newPostText = '';
            console.log(newPost)
            console.log(`newPost.message ${newPost.message}`)
            return state;
        case UPDATE_NEW_POST_TEXT:

            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
    
}

export default profileReduser; 