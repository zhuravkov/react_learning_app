import Dialog from './DialogItem/DialogItem.jsx';
import s from './Dialogs.module.css';
import EnterMessage from "./EnterMessage/EnterMessage";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom';




const Dialogs = (props) => {
    
    if (!props.isAuth) return <Navigate replace to="/login" />
    

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
  
        


            <EnterMessage newMessageText = {props.dialogsPage.newMessageText} 
                          sendMessage =  { props.onSendMessageClick }
                          updateNewMessage = { props.onNewMessageChange }                          

            />
        </div>
    );
}

export default Dialogs