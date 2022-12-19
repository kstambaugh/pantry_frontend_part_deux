import React, { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import IngredientObject from "./IngredientObject";
import { CurrentUser } from "../context/CurrentUser";





export default function IngredientList() {
    const items = useSelector(state => state.items)


    return (
        <div>
            <ListGroup className="ingredient_list">
                {items.map((item, index) => {
                    if (!item.inPantry || !item.inGrocery)
                        return (
                            <IngredientObject item={item} key={index} />
                        )
                })}
            </ListGroup>


        </div>
    );

}


