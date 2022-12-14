import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function AddNewItem() {
    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState("");

    const handleInputChange = event => {
        return setNewItem(event.target.value)
    };

    const handleSubmit = () => {
        dispatch(actionCreators.add_Ingredient(newItem))
        setNewItem("")
    };

    const handleRemove = () => {
        dispatch(actionCreators.remove_Ingredient())
    }

    return (
        <div>
            <input
                className="input"
                placeholder="New Ingredient"
                value={newItem}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Add New Ingredient</button>
        </div>
    )
}