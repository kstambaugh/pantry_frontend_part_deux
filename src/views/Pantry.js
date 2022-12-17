import React, { useContext } from "react";
import { CurrentUser } from "../context/CurrentUser";




export default function Pantry() {
    let { currentUser } = useContext(CurrentUser)


    if (currentUser) {
        return (
            <div>
                <h1>Grocery</h1>




            </div>
        )
    } else {
        return (
            <h1>Please Login To Use This Feature</h1>

        )
    }
}