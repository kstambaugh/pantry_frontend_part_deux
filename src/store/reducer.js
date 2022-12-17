import React, { useContext, useEffect, useState } from "react";
import { CurrentUser } from "../context/CurrentUser";

const initalState = {
    items: [],
}

const removeItem = (array, action) => {
    return array.filter((item, index) => index !== action.payload)
}



export default (state = initalState, action) => {
    switch (action.type) {

        case 'ADD_INGREDIENT':
            return {
                ...state,
                items: [
                    ...state.items, {
                        value: action.payload,
                        inPantry: false,
                        inGrocery: false
                    }
                ]
            };
        case 'DELETE_INGREDIENT':
            return {
                ...state,
                items: removeItem(state.items, action)
            }
        default:
            return state;
    }
}

// import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from "./actionTypes";

// const initialState = {
//     items: [],
//     loading: false,
//     error: null
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_ITEMS_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             };
//         case FETCH_ITEMS_SUCCESS:
//             return {
//                 ...state,
//                 items: action.payload,
//                 loading: false
//             };
//         case FETCH_ITEMS_ERROR:
//             return {
//                 ...state,
//                 error: action.payload,
//                 loading: false
//             };
//         default:
//             return state;
//     }
// };

// export default reducer;
