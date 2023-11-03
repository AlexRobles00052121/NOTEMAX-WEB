import  InputField from '../../components/Labels/InputFields'
import '../AuthStyle.css'
import { Link } from 'react-router-dom';

export function Login() {

    return (
        <section className='login-registrer'>
            <div className="container-form">
                <h1 className='title-form'>NoteMax</h1>
                <form className='my-form'>
                    <InputField
                        type="text"
                        id="1"
                        name="Username"
                        placeholder="Your Username..."
                    >
                        Submit your username:
                    </InputField>

                    <InputField
                        type="password"
                        id="2"
                        name="Password"
                        placeholder="Your Password..."

                    >
                        Submit your Password:
                    </InputField>
                </form>

                <InputField
                    type="submit"
                    id="2"
                    name="submit"
                    value="Log in"
                >
                </InputField>
                    <p>Don't have an account? <Link className='navLogin' to="/registrer">Registrarse</Link></p> 
            </div>
        </section>
    )
}

export default Login;