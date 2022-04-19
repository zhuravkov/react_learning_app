import React from 'react';
import s from '.././Dialogs.module.css'




import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { connect } from 'react-redux';


import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/FormControls';


const maxLength20 =  maxLengthCreator(20);

let NewMessage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.addMessageActionCreator(formData.new_message_text)
    }

    return <div className = {s.enterMessage}>
                <NewPostReduxForm onSubmit={onSubmit}/>
        </div>
}


let NewMessageForm = (props) => {
 
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={'Введи сообщение'} name={"new_message_text"} component ={TextArea}  validate={ [requiredField , maxLength20 ] } />
                    </div>
                    <div>
                        <button >Отправить</button>
                    </div>
                </form>
    )
        
}

const NewPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'new_message'
  })(NewMessageForm)





export default connect(undefined,{})(NewMessage)



