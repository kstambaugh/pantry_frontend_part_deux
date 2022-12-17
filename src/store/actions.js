
import { useDispatch } from "react-redux";
const { dispatch } = useDispatch()

import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from "./actionTypes";

export const fetchItemsRequest = () => ({
    type: FETCH_ITEMS_REQUEST
});

export const fetchItemsSuccess = items => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: items
});

export const fetchItemsError = error => ({
    type: FETCH_ITEMS_ERROR,
    payload: error
});

export const fetchItems = () => {
    return dispatch => {
        dispatch(fetchItemsRequest());
        return fetch("/api/items")
            .then(response => response.json())
            .then(items => dispatch(fetchItemsSuccess(items)))
            .catch(error => dispatch(fetchItemsError(error)));
    };
};