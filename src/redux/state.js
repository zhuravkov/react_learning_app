const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
  _state: {
    profilePage: {
      newPostText:'Ввод',  
      posts: [
        { id: '1', message: 'Hy man', likes: '15' },
        { id: '2', message: 'Привет', likes: '13' },
        { id: '3', message: 'Как дела?', likes: '12' },
        { id: '4', message: 'Ты тут', likes: '43' },
        { id: '5', message: 'Новый пост', likes: '16' },
        { id: '6', message: 'Привет из Index.JS', likes: '100' },
        { id: '7', message: 'Привет из STATE.JS', likes: '20' }
      ]
    
    },
    dialogsPage: {
      dialogs: [
        { id: '1', name: 'Ivan' },
        { id: '2', name: 'Sergey' },
        { id: '3', name: 'Evgeniy' },
        { id: '4', name: 'Vova' },
        { id: '5', name: 'Valera' },
        { id: '6', name: 'Index.js' },
        { id: '7', name: 'из state по веткам' }
      ],
      messages: [
        { id: '1', message: 'Hy man' },
        { id: '2', message: 'Привет' },
        { id: '3', message: 'Как дела?' },
        { id: '4', message: 'Ты тут' },
        { id: '5', message: 'Я здесь' },
        { id: '6', message: 'Привет из Index.JS' },
        { id: '7', message: 'Привет из state.JS' },
        { id: '8', message: 'из state по веткам' }
      ],
      newMessageText : ''

    },
    sideBar: {
      friends : [
        { id: '3', name: 'Mark'},
        { id: '1', name: 'Igor'},
        { id: '4', name: 'Гена'},
        { id: '2', name: 'Maks'},
      ]
    }
},
  get state() {
    return this._state;
  },
  _callSubscriber () {
    console.log('State change');
  },
  
  subscribe (observer) {
    this._callSubscriber = observer;
 },
  dispatch(action) {
    if (action.type === 'ADD_POST') {
      let newPost = {
        id: "8",
        message: this._state.profilePage.newPostText,
        likes: "0"
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    }
    else if (action.type === 'UPDATE_NEW_POST_TEXT') {
      console.log(action.newText);
      this._state.profilePage.newPostText = action.newText;

      this._callSubscriber(this._state);
    }
    else if (action.type === 'SEND_MESSAGE') {

      let newMessage = {
        id: "9",
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
      console.log(action.newMessageText);
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  },
}


// ПОСТЫ
export let addPostActionCreator= () => ({type: ADD_POST});
export let updateNewPostActionCreator= (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newMessageText: text});

// MESSAGES
export let addMessageActionCreator= () => ({type: SEND_MESSAGE})
export let updateNewMessageActionCreator= (messageText) =>   
  ({ type: UPDATE_NEW_MESSAGE_TEXT , newMessageText: messageText});
  


export default store;

window.store = store;