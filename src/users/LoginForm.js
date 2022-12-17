import { useState, useContext } from "react"
import { CurrentUser } from "../context/CurrentUser"



export default function LoginForm() {

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: 'kashmonet@mail.com',
        password: '1234'
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/authentication', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            // localStorage.setItem('token', data.token)

        } else {
            setErrorMessage('hello im an error', data.message)
        }
    }


    return (
        <div>
            {errorMessage !== null
                ? (
                    <div className="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        required
                        value={credentials.email}
                        onChange={event => setCredentials({ ...credentials, email: event.target.value })}
                        id="email"
                        name="email" />
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