import InputField from '../../components/Labels/InputFields'
import '../AuthStyle.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setloginSuccessful] = useState('false');
    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();
        const userData = {
            name: username,
            password: password
        }

        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(result => { 
                if (result.token) {
                    console.log(parseJwt(result.token))
                    localStorage.setItem('token', result.token)
                    setloginSuccessful('true')
                    navigate('/principal')
                } else {
                    setloginSuccessful('false')
                    navigate('/')
                }


            })
            .catch(error => {
                console.log(error)
            })
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
                        Username:
                    </InputField>

                    <InputField
                        type="password"
                        id="2"
                        name="Password"
                        placeholder="Your Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    >
                        Password:
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
                <p>Don&rsquo;t have an account? <Link className='navLogin' to="/registrer">Registrarse</Link></p>
            </div>
        </section>
    )
}

export default Login;