import { Field } from "redux-form"
import { reduxForm } from "redux-form"

import { connect } from 'react-redux';

import { loginThunk } from '../../redux/authReduser';



let Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        let {login, password , rememberMe} = formData
        // authAPI.login(login, password)
        props.loginThunk(login, password)
    }

    return <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>

        </div>
}

let LoginForm = (props) => {
    console.log('rerender')
    return <div>
                <form onSubmit={props.handleSubmit} >
                    <div>
                        <Field placeholder={'Login'} name={"login"} component =  { "input" } />
                    </div>
                    <div>
                        <Field  placeholder={'Password'} name={"password"} component =  { "input" } />
                    </div>
                    <div>
                        <Field  type={'checkbox'} name={"rememberMe"} component =  { "input" } /> remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>

                </form>
        </div>
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)





export default connect(undefined,{ loginThunk })(Login)
