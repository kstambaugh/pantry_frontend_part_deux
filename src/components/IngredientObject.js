import React, { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

import { useLocation } from "react-router-dom";



export default function IngredientObject({ item, index }) {
    const dispatch = useDispatch();
    const location = useLocation();



    const addItemToPantry = data => {
        dispatch(actionCreators.addToPantry(data));
    }
    const addItemToGrocery = index => {
        dispatch(actionCreators.addToGrocery(index));
    }
    const deleteIngredient = index => {
        dispatch(actionCreators.remove_Ingredient(index))
    }

    const SetButtons = () => {
        switch (location.pathname) {
            case "/pantry":
                return (
                    <div>
                        <Button className="ingr_btn" onClick={() => addItemToGrocery(item.value, index)}>Grocery</Button>
                    </div>
                );
            case "/grocery":
                return (
                    <div>
                        <Button className="ingr_btn" onClick={() => addItemToPantry(item.value)}>Pantry</Button>
                    </div>
                );
            default:
                return (
                    <div>
                        <Button className="ingr_btn" onClick={() => addItemToPantry(item.value)}>Pantry</Button>
                        <Button className="ingr_btn" onClick={() => addItemToGrocery(item.value)}>Grocery</Button>
                        <Button className="ingr_btn" onClick={() => deleteIngredient(index)}>Remove</Button>
                    </div>
                )
        }

    }

    return (
        <ListGroup.Item
            className="ingredientItems"
            key={index}
            variant="danger"
        >
            {item.value}
            <SetButtons />

        </ListGroup.Item>
    );
}