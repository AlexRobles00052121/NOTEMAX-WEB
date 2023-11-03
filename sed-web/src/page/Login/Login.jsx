import InputField from '../../components/Labels/InputFields'
import '../AuthStyle.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'usuario' && password === 'contraseña') {
            const userData={
                name : username,
                password : password
            }
            localStorage.setItem('user', JSON.stringify(userData));
            
            navigate('/principal');
        }
    };

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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    >
                        Submit your username:
                    </InputField>

                    <InputField
                        type="password"
                        id="2"
                        name="Password"
                        placeholder="Your Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    >
                        Submit your Password:
                    </InputField>
                </form>

                <InputField
                    type="submit"
                    id="2"
                    name="submit"
                    value="Log in"
                    onClick={handleLogin}
                >
                </InputField>
                <p>Don't have an account? <Link className='navLogin' to="/registrer">Registrarse</Link></p>
            </div>
        </section>
    )
}

export default Login;