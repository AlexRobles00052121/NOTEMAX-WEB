import '../AuthStyle.css'
import InputField from '../../components/Labels/InputFields';
export function Registrer() {
    return (
        <section className='login-registrer'>
            <div className='container-form' >
                <form className='my-form'>
                    <InputField
                        type="text"
                        id="5"
                        name="nombre"
                        placeholder="Your name..."
                    >
                        Name:
                    </InputField>

                    <InputField
                        type="text"
                        id="6"
                        name="apellido"
                        placeholder="Your last name...">
                        Last name:
                    </InputField>

                    <InputField
                        type="email"
                        id="7"
                        name="email"
                        placeholder="Your email..."
                    >
                        Email:
                    </InputField>

                    <InputField
                        type="tel"
                        id="8"
                        name="phote"
                        placeholder="Your phone number...">
                        Phone number
                    </InputField>

                </form>
                <InputField
                    type="submit"
                    id="9"
                    name="submit"
                    value="submit"
                >
                </InputField>
            </div>
        </section>
    )
}

export default Registrer;