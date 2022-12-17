import React, { useContext, useEffect, useState } from "react";
import { CurrentUser } from "../context/CurrentUser";
import { useLocation } from "react-router-dom";



export default function IngredientList({ NewIngredientItem }) {
    const location = useLocation()
    const [userIngredients, setUserIngredients] = useState([])
    const { currentUser } = useContext(CurrentUser)
    const { user_id: userId } = currentUser

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/ingredients/${userId}`);
            const data = await response.json();
            data.forEach((item) => {
                setUserIngredients((prevIngredients) => [...prevIngredients, item])
            });
        }
        fetchData()
    }, [currentUser, NewIngredientItem])


    return (
        <div>
            <ul>
                {userIngredients.map((ingredient) => (
                    <li key={ingredient.ingr_id}>{ingredient.ingredient_name}</li>
                ))}
            </ul>
        </div>
    );

}


