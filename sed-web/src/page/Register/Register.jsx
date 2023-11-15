import '../AuthStyle.css'
import InputField from '../../components/Labels/InputFields';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Registrer() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    const handleRegistrer = (e) => {
        e.preventDefault();
        const userData = {
            name: name,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        }

        fetch('http://localhost:4000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (response.status === 200) {
                    navigate('/login')
                } else {
                    navigate('/registrer')
                }
            })
            .catch(error => {
                // Manejar errores aquí
                console.error(error);
            })

    }


    return (
        <section className='login-registrer'>
            <div className='container-form' >
                <form className='my-form'>
                    <h1 className='title-form'>NoteMax</h1>
                    <InputField
                        type="text"
                        id="5"
                        name="nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name..."
                    >
                        Name:
                    </InputField>

                    <InputField
                        type="text"
                        id="6"
                        name="apellido"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Your last name...">
                        Last name:
                    </InputField>

                    <InputField
                        type="email"
                        id="7"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email..."
                    >
                        Email:
                    </InputField>

                    <InputField
                        type="tel"
                        id="8"
                        name="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Your phone number...">
                        Phone number
                    </InputField>

                </form>
                <InputField
                    type="submit"
                    id="9"
                    name="submit"
                    value="Register"
                    onClick={handleRegistrer}

                >
                </InputField>
                <p>Already have and acount?<Link className='navLogin' to="/">Iniciar sesion</Link></p>

            </div>
        </section>
    )
}

export default Registrer;