import React, { useEffect, useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";
import { CurrentUser } from "../context/CurrentUser";

import { useLocation } from "react-router-dom";




export default function IngredientObject({ item, index }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const { currentUser } = useContext(CurrentUser)
    const UserId = currentUser.user_id



    const addItemToPantry = data => {
        dispatch(actionCreators.addToPantry(data));
    }
    const removeItemFromPantry = data => {
        dispatch(actionCreators.removeFromPantry);
    }
    const addItemToGrocery = data => {
        dispatch(actionCreators.addToGrocery(data));
    }
    const removeItemFromGrocery = index => {
        dispatch(actionCreators.removeFromGrocery(index))
    }
    const deleteIngredient = data => {
        dispatch(actionCreators.delete_Ingredient(data))
    }

    const SetButtons = () => {
        switch (location.pathname) {
            case `/pantry${UserId}`:
                return (
                    <div>
                        <Button className="ingr_btn" onClick={() => addItemToGrocery(item.value)}>Grocery</Button>
                        {/* <Button className="removeBtn" onClick={() => deleteIngredient(item)}>X</Button> */}
                    </div>
                );
            case `/grocery${UserId}`:
                return (
                    <div>
                        <Button className="ingr_btn" onClick={() => addItemToPantry(item.value)}>Pantry</Button>
                        {/* <Button className="removeBtn" onClick={() => deleteIngredient(item)}>X</Button> */}

                    </div>
                );
            default:
                return (
                    <div>
                        <Button className="ingr_btn" onClick={() => addItemToPantry(item.value)}>Pantry</Button>
                        <Button className="ingr_btn" onClick={() => addItemToGrocery(item.value)}>Grocery</Button>
                        {/* <Button className="ingr_btn" onClick={() => deleteIngredient(item)}>Remove</Button> */}
                    </div>
                )
        }

    }

    return (
        <ListGroup.Item className="ingredientItems">

            <li className="ingredient_object" key={index}>
                <p> {item.value}</p>
                <SetButtons />
            </li>
        </ListGroup.Item>
    );
}