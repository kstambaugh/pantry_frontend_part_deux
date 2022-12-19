// import { useState, useContext } from "react";
// import { CurrentUser } from "../context/CurrentUser";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../store/actionTypes";



// const NewIngredientItem = () => {
//     const { currentUser } = useContext(CurrentUser)
//     const dispatch = useDispatch();

//     const [newItem, setNewItem] = useState("")



//     let currentId = ' '

//     if (currentUser) {
//         currentId = currentUser.user_id
//     }

//     const [newIngredient, setNewIngredient] = useState({
//         ingredient_name: ' ',
//         inPantry: false,
//         inGrocery: false,
//         user_id: currentId
//     })

//     const handleInputChange = event => {
//         return setNewIngredient({ ...newIngredient, ingredient_name: event.target.value, user_id: currentUser.user_id })
//     }
//     const handleInputChangeItem = event => {
//         return setNewItem(event.target.value)
//     }
//     const handleSubmitItem = event => {
//         dispatch(actionCreators.add_Ingredient(newItem))
//         setNewItem('')
//     }
//     const rootChange = event => {
//         handleInputChange(event)
//         handleInputChangeItem(event)
//     }

//     const rootSubmit = event => {
//         handleSubmit(event)
//         handleSubmitItem(event)
//     }

//     async function handleSubmit() {
//         dispatch(actionCreators.add_Ingredient(newIngredient.ingredient_name))
//         await fetch(`http://localhost:5000/ingredients`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newIngredient)
//         })
//         setNewIngredient(" ")
//     }



//     return (

//         <div>
//             <h2>Add New Ingredient</h2>
//             <form onSubmit={rootSubmit}>
//                 <label htmlFor="ingrName">New Ingredient</label>
//                 <input
//                     required
//                     value={newIngredient.ingredient_name}
//                     onChange={rootChange}
//                     className='ingredient_list_item'
//                     id="ingrName"
//                     name="ingrName" />
//                 <input className="ingr_btn" type="submit" value="add ingredient" />
//             </form>
//         </div>

//     )

// }

// export default NewIngredientItem