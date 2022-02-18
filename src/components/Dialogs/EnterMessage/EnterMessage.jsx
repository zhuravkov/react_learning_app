import React from 'react';
import s from '.././Dialogs.module.css'

const  EnterMessage = () => {
    let messageInput = React.createRef()
    let sendMessage = ()=>{
        let text = messageInput.current.value;
        alert (text);
    }

    return (
        <div className= { s.enterMessage }>
            <div>
                <textarea ref={ messageInput } name="" id="" cols="80" rows="3"></textarea>
            </div>
            <div>
                <button onClick={ sendMessage } >Отправить</button>
            </div>
                
            
        </div>

    )
}
export default EnterMessage;