import { useState } from "react"

export default function SignUpForm() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
        await fetch('http://localhost:5000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        required
                        value={user.firstName}
                        onChange={event => setUser({ ...user, firstName: event.target.value })}
                        id="firstName"
                        name="firstName" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        required
                        value={user.lastName}
                        onChange={event => setUser({ ...user, lastName: event.target.value })}
                        id="lastName"
                        name="lastName" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        required
                        value={user.email}
                        onChange={event => setUser({ ...user, email: event.target.value })}
                        id="email"
                        name="email" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input
                        required
                        value={user.password}
                        onChange={event => setUser({ ...user, password: event.target.value })}
                        id="password"
                        name="password" />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}