const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

// MESSAGES
export let addMessageActionCreator= () => ({type: SEND_MESSAGE})
export let updateNewMessageActionCreator= (messageText) =>   
  ({ type: UPDATE_NEW_MESSAGE_TEXT , newMessageText: messageText});

  
const dialodsReduser = (state,action) =>{
    if (action.type === SEND_MESSAGE) {

        let newMessage = {
          id: "9",
          message: state.newMessageText
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
     
      }
      else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        console.log(action.newMessageText);
        state.newMessageText = action.newMessageText;
      }
    return state;
}

export default dialodsReduser; 