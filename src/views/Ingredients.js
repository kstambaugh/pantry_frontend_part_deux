import React from "react";
import AddNewItem from "../components/AddIngredient";
import IngredientList from "../components/IngredientList";

export default function Ingredients() {

    return (
        <div>
            <h1>Ingredients</h1>
            <AddNewItem />
            <IngredientList />


        </div>
    )
}