import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import IngredientObject from "../components/IngredientObject";


export default function Pantry() {
    const pantryItems = useSelector(state => state.items)

    return (
        <div>
            <h1>Pantry Inventory</h1>
            <ListGroup className="m-4" variant="flush">
                {pantryItems.map((item, index) => {
                    console.log("pantry", item)
                    if (item.inPantry)
                        return (
                            <IngredientObject item={item} index={index} />
                        );
                })}
            </ListGroup>
        </div>
    )
}