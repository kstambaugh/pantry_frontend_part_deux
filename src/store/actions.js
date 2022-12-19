export const actionCreators = {
    add_Ingredient: data => ({ type: 'ADD_INGREDIENT', payload: data }),
    addToPantry: data => ({ type: 'ADD_TO_PANTRY', payload: data }),
    removeFromPantry: data => ({ type: 'REMOVE_FROM_PANTRY', payload: data }),
    addToGrocery: data => ({ type: 'ADD_TO_GROCERY', payload: data }),
    removeFromGrocery: data => ({ type: 'REMOVE_FROM_GROCERY', payload: data }),
    delete_Ingredient: (data) => ({ type: 'DELETE_INGREDIENT', payload: data }),

}