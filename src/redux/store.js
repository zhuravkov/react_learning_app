import profileReduser from './profileReduser';
import dialodsReduser from './dialogsReduser';
import sideBarReduser from './sideBarReduser';

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

    this._state.profilePage = profileReduser(this._state.profilePage,action)
    this._state.dialogsPage = dialodsReduser(this._state.dialogsPage,action)
    this._state.sideBar = sideBarReduser(this._state.sideBar,action)

    this._callSubscriber(this._state);
  }
}



export default store;

window.store = store;