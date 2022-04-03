const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';





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
        ],
        profile:null

    }


//Павильный код

const profileReduser = (state=initialState,action) =>{

    switch (action.type){
    
        case ADD_POST:{
            let postBody = state.newPostText;
            return {
                ...state,
                newPostText: 'Новый пост',
                posts: [...state.posts, {id: "8",message: postBody, likes: "0"}]
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newPostText
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };
        }



        default:
            return state;
    }
}


// ПОСТЫ
export let addPostActionCreator= () => ({type: ADD_POST});
export let updateNewPostActionCreator= (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export let setUserProfile= (profile) => ({type: SET_USER_PROFILE, profile});



export default profileReduser; 