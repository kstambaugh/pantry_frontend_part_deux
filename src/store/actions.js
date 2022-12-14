export const actionCreators = {
    add_Ingredient: data => ({ type: "ADD_INGREDIENT", payload: data }),
    addToPantry: data => ({ type: "ADD_TO_PANTRY", payload: data }),
    addToGrocery: data => ({ type: "ADD_TO_GROCERY", payload: data }),
    remove_Ingredient: (data) => ({ type: "REMOVE_INGREDIENT", payload: data }),
}