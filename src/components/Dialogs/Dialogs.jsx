import s from './Dialogs.module.css';

import Dialog from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import EnterMessage from './EnterMessage/EnterMessage';


const Dialogs = (props) => {
    

    

    let dialogsElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} />);
    let messagesElement = props.state.messages.map(m => <Message id={m.id} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div className={`${s.message} ${s.messageRight}`} >Новые сообщения</div>

            </div>

            <EnterMessage newMessageText = {props.state.newMessageText} 
                          sendMessage =  { props. sendMessage }
                          updateNewMessage = { props.updateNewMessage }                          
            />
        </div>
    );
}

export default Dialogs