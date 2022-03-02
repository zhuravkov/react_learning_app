import s from './Dialogs.module.css';

import Dialog from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import EnterMessage from './EnterMessage/EnterMessage';


const Dialogs = (props) => {
    

    

    let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name} />);
    let messagesElement = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div className={`${s.message} ${s.messageRight}`} >Новые сообщения</div>

            </div>
<<<<<<< HEAD
            <EnterMessage newMessageText = {props.state.newMessageText} 
                          sendMessage =  { props. sendMessage }
                          updateNewMessage = { props.updateNewMessage }       
        
=======

            <EnterMessage newMessageText = {props.dialogsPage.newMessageText} 
                          sendMessage =  { props.onSendMessageClick }
                          updateNewMessage = { props.onNewMessageChange }                          
>>>>>>> ae907591b19d9dec1ca4653b0b16f44d90cf89a0
            />
        </div>
    );
}

export default Dialogs