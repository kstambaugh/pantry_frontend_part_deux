import { useDispatch } from "react-redux"


export const removeItem = (array, action) => {
    return array.filter((item, index) => index !== action.payload)
}




export const deleteFromPantry = (array, action) => {
    return array.map((item, index) => {
        if (item.value !== action.payload) {
            return item
        }
        return {
            ...item,
            inPantry: false,
            inGrocery: false
        }
    })
}



// import { useDispatch } from "react-redux";
// const { dispatch } = useDispatch()

// import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from "./actionTypes";

// export const fetchItemsRequest = () => ({
//     type: FETCH_ITEMS_REQUEST
// });

// export const fetchItemsSuccess = items => ({
//     type: FETCH_ITEMS_SUCCESS,
//     payload: items
// });

// export const fetchItemsError = error => ({
//     type: FETCH_ITEMS_ERROR,
//     payload: error
// });

// export const fetchItems = () => {
//     return dispatch => {
//         dispatch(fetchItemsRequest());
//         return fetch("/api/items")
//             .then(response => response.json())
//             .then(items => dispatch(fetchItemsSuccess(items)))
//             .catch(error => dispatch(fetchItemsError(error)));
//     };
// };