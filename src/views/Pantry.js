import React, { useEffect, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import IngredientObject from '../components/IngredientObject';
import { CurrentUser } from "../context/CurrentUser";


export default function Pantry() {

    const pantryItems = useSelector(state => state.items)
    const { currentUser } = useContext(CurrentUser)

    if (currentUser) {
        return (
            <div className=" main_view ">
                <h1>Pantry</h1>
                <ListGroup className='pantry_page'>
                    {pantryItems.map((items, index) => {
                        if (items.inPantry && !items.inGrocery)
                            return (
                                <IngredientObject item={items} index={index} />
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




// export default function Pantry() {
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