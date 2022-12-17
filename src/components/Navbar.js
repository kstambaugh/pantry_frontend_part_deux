import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../context/CurrentUser";


export default function NavBar() {

    const navigate = useNavigate()
    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("users/signup/")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate("users/login/")}>
                    Login
                </a>
            </li>
        </>
    )


    if (currentUser) {
        loginActions = (<>

            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName}
            </li>
            <li style={{ float: 'right' }}>
                <a href="/users/login"
                    onClick={() => {
                        setCurrentUser('')
                        navigate('/users/login')

                    }}>
                    Logout
                </a>
            </li>

        </>
        )
    }
    const [routeNum, setRouteNum] = useState('')


    useEffect(() => {
        if (currentUser != null) {
            setRouteNum(currentUser.user_id)
        }
    })

    return (
        <div>
            <h1>My Pantry</h1>
            <nav>

                <li href="#" onClick={() => navigate("/")}><a>Home</a></li>
                <li href="#" onClick={() => navigate(`/pantry${routeNum}`)}><a>Pantry</a></li>
                <li href="#" onClick={() => navigate(`/grocery${routeNum}`)}><a >Grocery</a></li>
                <li href="#" onClick={() => navigate(`/ingredients${routeNum}`)}><a >Ingredients</a></li>
            </nav>
            {loginActions}


        </div>
    )
}