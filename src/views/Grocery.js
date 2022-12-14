import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import IngredientObject from "../components/IngredientObject";


export default function Pantry() {
    const groceryList = useSelector(state => state.items)

    return (
        <div>
            <h1>Grocery List</h1>
            <ListGroup className="m-4" variant="flush">
                {groceryList.map((item, index) => {
                    console.log("Grocery", item)
                    if (item.inGrocery)
                        return (
                            <IngredientObject item={item} index={index} />
                        );
                })}
            </ListGroup>
        </div>
    )
}