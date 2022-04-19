import { profileAPI } from '../api/api.js';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';





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
        profile: null,
        status: ''
    }


//Павильный код

const profileReduser = (state=initialState,action) =>{

    switch (action.type){
    
        case ADD_POST:{
            
            return {
                ...state,
                posts: [...state.posts, {id: "8",message: action.new_post_text, likes: "0"}]
            };
        }
        // case UPDATE_NEW_POST_TEXT:{
        //     return {
        //         ...state,
        //         newPostText: action.newPostText
        //     };
        // }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS:{
            return {
                ...state,
                status: action.status
            };
        }


        
        default:
            return state;
    }
}


// ПОСТЫ
export let addPostActionCreator= (new_post_text) => ({type: ADD_POST, new_post_text});
// export let updateNewPostActionCreator= (text) => 
//   ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

let setUserProfile= (profile) => ({type: SET_USER_PROFILE, profile});
let setUserStatus= (status) => ({type: SET_USER_STATUS, status});

export const userProfileThunk = (userId) => {
    return (dispatch) =>
        profileAPI.usersProfile(userId)
        .then(data => {dispatch(setUserProfile(data))}) 
}

export const getUserStatusThunk = (userId) => {
    return (dispatch) =>
        profileAPI.getStatus(userId)
        .then (data =>{ if (data.resultCode===0) {
            dispatch(setUserStatus(data.status))
        }})
}
export const updateUserStatusThunk = (status) => {
    return (dispatch) =>
        profileAPI.updateStatus(status)
        .then (data =>{ if (data.resultCode===0) {
            dispatch(setUserStatus(data.status))
        }})
}




export default profileReduser; 