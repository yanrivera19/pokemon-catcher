import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./features/pokemon/pokemonSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        modal: modalReducer,
    },
});
