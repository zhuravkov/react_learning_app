const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

// ПОСТЫ
export let addPostActionCreator= () => ({type: ADD_POST});
export let updateNewPostActionCreator= (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newPostText: text});


//Павильный код

const profileReduser = (state,action) =>{
    switch (action.type){

        case ADD_POST:
            let newPost = {
                id: "8",
                message: state.newPostText,
                likes: "0"
            };
            state.posts.push(newPost);
            state.newPostText = '';
            
            return state;

        case UPDATE_NEW_POST_TEXT:
            console.log(action.newPostText);
            state.newPostText = action.newPostText;
            return state;

        default:
            return state;
    }
}

export default profileReduser; 