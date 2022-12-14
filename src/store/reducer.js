const initalState = {
    items: []
}

const addItemToPantry = (array, action) => {
    return array.map((item, index) => {
        if (item.value !== action.payload) {
            return item;
        }
        return {
            ...item,
            inPantry: true,
            inGrocery: false
        }
    })
}
const addItemToGrocery = (array, action) => {
    return array.map((item, index) => {
        if (item.value !== action.payload) {
            return item;
        }
        return {
            ...item,
            inPantry: false,
            inGrocery: true
        }
    })
}

const removeItem = (array, action) => {
    return array.filter((item, index) => index !== action.payload);
};

export default (state = initalState, action) => {
    switch (action.type) {
        case "ADD_INGREDIENT":
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        value: action.payload,
                        inPantry: false,
                        inGrocery: false
                    }
                ]
            }
        case "REMOVE_INGREDIENT":
            return {
                ...state,
                items: removeItem(state.items, action)
            }

        case "ADD_TO_PANTRY":
            return {
                ...state,
                items: addItemToPantry(state.items, action)
            };
        case "ADD_TO_GROCERY":
            return {
                ...state,
                items: addItemToGrocery(state.items, action)
            }
        default:
            return state;
    }
}