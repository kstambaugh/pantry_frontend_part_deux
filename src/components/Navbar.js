import React from "react";
import { useNavigate } from "react-router-dom";


export default function NavBar() {

    const navigate = useNavigate()



    return (
        <nav>
            <li href="#" onClick={() => navigate("/")}><a>Home</a></li>
            <li href="#" onClick={() => navigate("/pantry")}><a>Pantry</a></li>
            <li href="#" onClick={() => navigate("/grocery")}><a >Grocery</a></li>
            <li href="#" onClick={() => navigate("/ingredients")}><a >Ingredients</a></li>
            <li href="#" onClick={() => navigate("/users")}><a >Login</a></li>
        </nav>
    )
}