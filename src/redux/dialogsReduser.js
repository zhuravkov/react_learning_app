const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  
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
    newMessageText: ''
};



const dialogsReduser = (state=initialState,action) =>{

    if (action.type === SEND_MESSAGE) {
        
        let newMessage = {
          id: "9",
          message: state.newMessageText
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
        console.log(state)
      }
      else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        console.log(action.newMessageText);
        state.newMessageText = action.newMessageText;
        console.log(state)
      }
    return state; 
    
}

// MESSAGES
export let addMessageActionCreator= () => ({type: SEND_MESSAGE})
export let updateNewMessageActionCreator= (messageText) =>   
  ({ type: UPDATE_NEW_MESSAGE_TEXT , newMessageText: messageText});



export default dialogsReduser; 