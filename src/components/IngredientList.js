import React, { useContext, useEffect, useState } from "react";
import { CurrentUser } from "../context/CurrentUser";
import { useLocation } from "react-router-dom";
import ItemButtons from "./ItemButtons";




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
    }, [currentUser])






    return (
        <div>
            {userIngredients.map((ingredient) => (
                <ul>
                    <li key={ingredient.ingr_id}>{ingredient.ingredient_name}</li>
                    <ItemButtons value={ingredient} />
                </ul>

            ))}

        </div>
    );

}


