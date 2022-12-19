const initalState = {
    items: []
}

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
                        inGrocery: false,
                    }
                ]
            }
        case "ADD_TO_GROCERY":
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.value === action.payload) {
                        return {
                            ...item,
                            inPantry: false,
                            inGrocery: true,
                        }
                    }
                })
            };
        case "ADD_TO_PANTRY":
            return {
                ...state,
                items: state.items.map(item => {
                    console.log('At the add to pantry case:::', 'item value:', item.value, ',action payload:', action.payload, ',state.items:', state.items, ',item:', item)
                    if (item.value === action.payload) {
                        return {
                            ...item,
                            inPantry: true,
                            inGrocery: false,
                        }
                    }
                })

            };
        case 'DELETE_INGREDIENT':
            const index = state.items.findIndex(item => item.value === action.payload)
            return {
                ...state,
                items: [
                    ...state.items.slice(0, index),
                    ...state.items.slice(index + 1)
                ]
            }

        case "REMOVE_FROM_PANTRY":
            return {
                items: [
                    {
                        value: action.payload,
                        inPantry: false,
                        inGrocery: false,

                    }
                ]
            };

        case "REMOVE_FROM_GROCERY":
            return {
                items: [
                    {
                        value: action.payload,
                        inPantry: false,
                        inGrocery: false,

                    }
                ]
            };
        default:
            return state;
    }
}