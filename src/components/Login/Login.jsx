import { Field } from "redux-form"
import { reduxForm } from "redux-form"

import { connect } from 'react-redux';

import { loginThunk } from '../../redux/authReduser';
import { Input } from "../common/FormsControls/FormControls";
import { requiredField } from '../../utils/validators/validators';



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
                        <Field placeholder={'Login'} name={"login"} component =  { Input }  validate = { requiredField } />
                    </div>
                    <div>
                        <Field  placeholder={'Password'} name={"password"} component =  { Input } validate = { requiredField } />
                    </div>
                    <div>
                        <Field  component =  { Input } name={"rememberMe"} type={"checkbox"}   /> remember me
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
