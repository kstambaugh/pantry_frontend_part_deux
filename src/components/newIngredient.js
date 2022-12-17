import { useState, useContext } from "react";
import { CurrentUser } from "../context/CurrentUser";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actionTypes";



const NewIngredientItem = () => {
    const { currentUser } = useContext(CurrentUser)
    const dispatch = useDispatch();

    let currentId = ' '

    if (currentUser) {
        currentId = currentUser.user_id
    }

    const [newIngredient, setNewIngredient] = useState({
        ingredient_name: ' ',
        inPantry: false,
        inGrocery: false,
        user_id: currentId
    })

    const handleInputChange = event => {
        return setNewIngredient({ ...newIngredient, ingredient_name: event.target.value, user_id: currentUser.user_id })
    }

    async function handleSubmit() {
        dispatch(actionCreators.add_Ingredient())
        await fetch(`http://localhost:5000/ingredients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newIngredient)
        })
        setNewIngredient(" ")
    }



    return (

        <div>
            <h2>Add New Ingredient</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ingrName">New Ingredient</label>
                <input
                    required
                    value={newIngredient.ingredient_name}
                    onChange={handleInputChange}
                    // value={newIngredient.ingredient_name}
                    // onChange={e => setNewIngredient({ ...newIngredient, ingredient_name: e.target.value, user_id: currentUser.user_id })}
                    className='ingredient_list_item'
                    id="ingrName"
                    name="ingrName" />
                <input className="ingr_btn" type="submit" value="add ingredient" />
            </form>
        </div>

    )

}

export default NewIngredientItem