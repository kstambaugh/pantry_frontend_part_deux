import React, { useContext, useEffect, useState } from "react";
import { CurrentUser } from "../context/CurrentUser";
import IngredientList from "../components/IngredientList";
import AddNewItem from "../components/AddIngredient";




export default function Ingredients() {
    const { currentUser } = useContext(CurrentUser)




    if (currentUser) {
        return (
            <div className="ingredient_page main_view">
                <h1>Ingredients</h1>
                <AddNewItem />
                <IngredientList />

            </div>
        )
    } else {
        return (

            <div className="please_login_message">
                <h2>Please Login To Use This Feature</h2>
            </div>

        )
    }
}