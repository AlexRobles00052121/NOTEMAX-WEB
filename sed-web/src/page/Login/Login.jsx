import { InputField } from "../../components/labels/InputFields";
import '../AuthStyle.css'

export function Login() {

    return (
        <section className='login-registrer'>
            <div className="container-form">
                <form className='my-form'>
                    <InputField
                        type="text"
                        id="1"
                        name="Username"
                        placeholder="your Username..."
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
                    value="Submit"
                >
                </InputField>
            </div>
        </section>
    )
}

export default Login;