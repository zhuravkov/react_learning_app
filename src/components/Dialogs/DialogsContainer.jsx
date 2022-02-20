import Dialogs from './Dialogs';
import { addMessageActionCreator } from './../../redux/dialogsReduser';
import { updateNewMessageActionCreator } from './../../redux/dialogsReduser';


const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageActionCreator(body)
        props.store.dispatch(action);
    }

    return <Dialogs state = { state }
                    sendMessage =  { onSendMessageClick }
                    updateNewMessage = { onNewMessageChange }
    />
}

export default DialogsContainer;

