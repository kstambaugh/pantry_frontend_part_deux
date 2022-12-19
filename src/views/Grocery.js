import { current } from "immer";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import IngredientObject from "../components/IngredientObject";
import { CurrentUser } from "../context/CurrentUser";

export default function Grocery() {
    const groceryList = useSelector(state => state.items)
    const { currentUser } = useContext(CurrentUser)

    if (currentUser) {
        return (
            <div className="main_view ">
                <h1>Grocery List</h1>
                <ListGroup className="grocery_page">
                    {groceryList.map((item, index) => {
                        if (item.inGrocery && !item.inPantry)
                            return (
                                <IngredientObject item={item} index={index} />
                            )
                    })}
                </ListGroup>
            </div>
        )

    } else {
        return (

            <div className="please_login_message">
                <h2>Please Login To Use This Feature</h2>
            </div>

        )

    }

}

// import React, { useContext } from "react";
// import { CurrentUser } from "../context/CurrentUser";
// export default function Grocery() {
//     let { currentUser } = useContext(CurrentUser)


//     if (currentUser) {
//         return (
//             <div>
//                 <h1>Grocery</h1>




//             </div>
//         )
//     } else {
//         return (
//             <h1>Please Login To Use This Feature</h1>

//         )
//     }
// }