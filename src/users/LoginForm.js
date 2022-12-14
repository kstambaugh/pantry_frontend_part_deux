import { useState } from "react"

export default function LoginForm() {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })


    return (
        <div>
            <form>
                <div>
                    <label htmlFor="emailAddress">Email</label>
                    <input
                        required
                        value={credentials.emailAddress}
                        onChange={event => setCredentials({ ...credentials, emailAddress: event.target.value })}
                        id="emailAddress"
                        name="emailAddress" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input
                        required
                        value={credentials.password}
                        onChange={event => setCredentials({ ...credentials, password: event.target.value })}
                        id="password"
                        name="password" />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}