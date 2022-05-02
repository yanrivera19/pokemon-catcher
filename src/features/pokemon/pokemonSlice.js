import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    pokemonItems: [],
    catchedPokemons: [],
    selectedPokemon: [],
};

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchPokemons",
    async (randomNum) => {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${randomNum}`
            );
            const final = await Promise.all(
                getPokemonInfo(response.data.results)
            );

            return final;
        } catch (error) {
            console.log(error);
        }
    }
);

const getPokemonInfo = (data) => {
    try {
        const res = data.map(async (pokemon) => {
            const result = await axios.get(pokemon.url);

            return result.data;
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        selectPokemon: (state, action) => {
            let selectedPokemon;

            if (localStorage.getItem("selected-pokemon") === null) {
                selectedPokemon = [];
            } else {
                selectedPokemon = JSON.parse(
                    localStorage.getItem("selected-pokemon")
                );
            }

            selectedPokemon = action.payload;
            state.selectedPokemon = selectedPokemon;
            localStorage.setItem(
                "selected-pokemon",
                JSON.stringify(selectedPokemon)
            );
        },
        catchPokemon: (state, action) => {
            let catchedPokemons;

            if (localStorage.getItem("catched-pokemons") === null) {
                catchedPokemons = [];
            } else {
                catchedPokemons = JSON.parse(
                    localStorage.getItem("catched-pokemons")
                );
            }

            catchedPokemons.push(action.payload);
            state.catchedPokemons = catchedPokemons;
            localStorage.setItem(
                "catched-pokemons",
                JSON.stringify(catchedPokemons)
            );
        },
        getCatchedPokemons: (state) => {
            if (localStorage.getItem("catched-pokemons") !== null) {
                const catchedPokemons = JSON.parse(
                    localStorage.getItem("catched-pokemons")
                );

                state.catchedPokemons = catchedPokemons;
            }
        },
        getSelectedPokemon: (state) => {
            if (localStorage.getItem("selected-pokemon") !== null) {
                const selectedPokemon = JSON.parse(
                    localStorage.getItem("selected-pokemon")
                );

                state.selectedPokemon = selectedPokemon;
            }
        },
        changeName: (state, action) => {
            state.selectedPokemon.name = action.payload;
        },
        releasePokemon: (state, action) => {
            const catchedPokemons = JSON.parse(
                localStorage.getItem("catched-pokemons")
            );
            const filteredPokemons = catchedPokemons.filter(
                (pokemon) => pokemon.id !== action.payload
            );

            localStorage.setItem(
                "catched-pokemons",
                JSON.stringify(filteredPokemons)
            );

            state.catchedPokemons = filteredPokemons;
        },
    },
    extraReducers: {
        [fetchPokemons.fulfilled]: (state, action) => {
            state.pokemonItems = [];
            state.pokemonItems = action.payload;
        },
    },
});

export const {
    selectPokemon,
    catchPokemon,
    getCatchedPokemons,
    changeName,
    getSelectedPokemon,
    releasePokemon,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
