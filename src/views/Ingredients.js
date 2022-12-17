import React, { useContext, useEffect, useState } from "react";
import { CurrentUser } from "../context/CurrentUser";
import NewIngredientItem from "../components/newIngredient";
import IngredientList from "../components/IngredientList";




export default function Ingredients() {
    const { currentUser } = useContext(CurrentUser)




    if (currentUser) {
        return (
            <div>
                <h1>Ingredients</h1>
                <NewIngredientItem />
                <IngredientList NewIngredientItem={NewIngredientItem} />
            </div>
        )
    } else {
        return (
            <h1>Please Login To Use This Feature</h1>

        )
    }
}