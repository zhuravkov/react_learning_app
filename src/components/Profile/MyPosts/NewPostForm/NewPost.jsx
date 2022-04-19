
import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { connect } from 'react-redux';




let NewPost = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.addPostActionCreator(formData.new_post_text)
        // let {login, password , rememberMe} = formData
        // authAPI.login(login, password)
        // props.loginThunk(login, password)
    }

    return <div>
                <NewPostReduxForm onSubmit={onSubmit}/>
        </div>
}


let NewPostForm = (props) => {
 
    return <div>
                <form onSubmit={props.handleSubmit} >
                    <div>
                        <Field placeholder={'add post'} name={"new_post_text"} component =  { "input" } />
                    </div>
                    <div>
                        <button>Add POST</button>
                    </div>
                </form>
        </div>
}

const NewPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'new_post'
  })(NewPostForm)





export default connect(undefined,{})(NewPost)
