import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    fetchPokemons,
    getCatchedPokemons,
} from "../features/pokemon/pokemonSlice";

import { useDispatch, useSelector } from "react-redux";
import PokemonItem from "./PokemonItem";

const CatchPokemonPage = () => {
    const dispatch = useDispatch();
    const { pokemonItems, catchedPokemons } = useSelector(
        (state) => state.pokemon
    );
    console.log(catchedPokemons);

    useEffect(() => {
        dispatch(fetchPokemons(Math.floor(Math.random() * 20) * 10));
        dispatch(getCatchedPokemons());
    }, [dispatch]);

    const renderList = pokemonItems.map((pokemon) => (
        <PokemonItem
            traits={pokemon}
            key={pokemon.id}
            catched={catchedPokemons.some((el) => el.id === pokemon.id)}
        />
    ));

    return (
        <div>
            <Link to="/" className="home-link">
                <div className="d-flex justify-content-start align-items-center">
                    <button className="btn p-2 ">
                        <i className="fa-solid fa-arrow-left go-back-btn p-2 rounded-circle"></i>
                    </button>
                    <p className="mb-0 ">Go back</p>
                </div>
            </Link>

            <header className="pok-header mb-4 mt-2">
                <h3 className="fw-bold">
                    <i className="fa-solid fa-circle-dot me-2" />
                    Catch 'em all!
                    <i className="fa-solid fa-circle-dot ms-2" />
                </h3>
            </header>
            <div className="row g-2 justify-content-center m-auto pok-list">
                {renderList}
            </div>
        </div>
    );
};

export default CatchPokemonPage;
