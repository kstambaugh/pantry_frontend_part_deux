import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/rootReducer";

export const MyStore = configureStore({
    reducer: rootReducer
})