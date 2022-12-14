import React from "react";
import LoginForm from "../users/LoginForm";
import SignUpForm from "../users/SignUp";
import { useNavigate } from "react-router-dom";



export default function UserScreen() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
            <p>Need an Account?</p>
            <li href="#" onClick={() => navigate("/users/signup")}><a >Sign Up Here</a></li>


        </div>
    )
}