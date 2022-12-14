import { useState } from "react"

export default function SignUpForm() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })


    return (
        <div>
            <form>
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
                    <label htmlFor="emailAddress">Email</label>
                    <input
                        required
                        value={user.emailAddress}
                        onChange={event => setUser({ ...user, emailAddress: event.target.value })}
                        id="emailAddress"
                        name="emailAddress" />
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