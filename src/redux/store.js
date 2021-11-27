import { configureStore } from "@reduxjs/toolkit";
import trilogyReducer from "./trilogy_reducer";
import easterEggs_reducer from "./easterEggs_reducer";

export const store = configureStore({
    reducer: {
        trilogy : trilogyReducer,
        easter : easterEggs_reducer
    },
})