import { reduxForm } from "redux-form"


let LoginForm = (props) => {
    return <div>
                <form>
                    <div>
                        <input placeholder={'Login'} />
                    </div>
                    <div>
                        <input placeholder={'Password'} />
                    </div>
                    <div>
                        <input type={'checkbox'} /> remember me
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

export default LoginForm