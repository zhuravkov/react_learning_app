import React from 'react';
import s from '.././Dialogs.module.css'




const  EnterMessage = (props) => {
    

    let onUpdateNewMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessage (text);
    }
    
    let onSendMessage =() => {
        props.sendMessage();
    }

    return (
        <div className= { s.enterMessage }>
            <div>
                <textarea  onChange={ onUpdateNewMessage } value={props.newMessageText} placeholder="Введи сообщение"  cols="80" rows="3"></textarea>
            </div>
            <div>
                <button onClick={ onSendMessage } >Отправить</button>
            </div>
                
            
        </div>

    )
}
export default EnterMessage;