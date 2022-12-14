import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import IngredientObject from "./IngredientObject";


export default function IngredientList() {
    const items = useSelector(state => state.items);



    return (
        <ListGroup className="m-4" variant="flush">
            {items.map((item, index) => {
                if (!item.inPantry || !item.inGrocery)
                    return (
                        <IngredientObject item={item} index={index} />

                    );

            })}
        </ListGroup>
    );
}