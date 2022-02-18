import React from 'react';
import s from '.././Dialogs.module.css'
import { updateNewMessageActionCreator } from '../../../redux/state';
import { addMessageActionCreator } from './../../../redux/state';



const  EnterMessage = (props) => {
    let messageInput = React.createRef();

    let updateNewMessage = () => {
        let text = messageInput.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }
    
    let sendMessage =() => {
        props.dispatch(addMessageActionCreator());
    }

    return (
        <div className= { s.enterMessage }>
            <div>
                <textarea ref={ messageInput } onChange={ updateNewMessage } value={props.newMessageText}         name="" id="" cols="80" rows="3"></textarea>
            </div>
            <div>
                <button onClick={ sendMessage } >Отправить</button>
            </div>
                
            
        </div>

    )
}
export default EnterMessage;