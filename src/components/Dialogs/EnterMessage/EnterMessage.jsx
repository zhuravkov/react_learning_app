import React from 'react';
import s from '.././Dialogs.module.css'
import { updateNewMessageActionCreator } from '../../../redux/dialogsReduser.js';
import { addMessageActionCreator } from './../../../redux/dialogsReduser.js';



const  EnterMessage = (props) => {


    let updateNewMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator (text));
    }
    
    let sendMessage =() => {
        props.dispatch(addMessageActionCreator());
    }

    return (
        <div className= { s.enterMessage }>
            <div>
                <textarea  onChange={ updateNewMessage } value={props.newMessageText} placeholder="Введи сообщение"  cols="80" rows="3"></textarea>
            </div>
            <div>
                <button onClick={ sendMessage } >Отправить</button>
            </div>
                
            
        </div>

    )
}
export default EnterMessage;