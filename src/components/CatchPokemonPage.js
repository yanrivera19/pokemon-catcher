import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    fetchPokemons,
    getCatchedPokemons,
} from "../features/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import PokemonItem from "./PokemonItem";
import Loader from "./Loader";

const CatchPokemonPage = () => {
    const dispatch = useDispatch();
    const { pokemonItems, catchedPokemons } = useSelector(
        (state) => state.pokemon
    );
    const [isLoading, setIsLoading] = useState(true);
    const randomNum = () => Math.floor(Math.random() * 20) * 10;

    useEffect(() => {
        dispatch(fetchPokemons(randomNum()));
        dispatch(getCatchedPokemons());
        setIsLoading(false);
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
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Link to="/" className="home-link">
                        <div className="d-flex justify-content-start align-items-center">
                            <button className="btn p-2 ">
                                <i className="fa-solid fa-arrow-left go-back-btn p-2 rounded-circle"></i>
                            </button>
                            <p className="mb-0 fw-bold">Go back</p>
                        </div>
                    </Link>

                    <button
                        className="btn fs-5 see-more-btn mt-1 mb-4"
                        onClick={() => dispatch(fetchPokemons(randomNum()))}
                    >
                        See More Pokémons!
                    </button>
                    <header className="pok-header mb-4 mt-2">
                        <h3 className="fw-bold">
                            <i className="fa-solid fa-circle-dot me-2" />
                            Catch 'em all!
                            <i className="fa-solid fa-circle-dot ms-2" />
                        </h3>
                    </header>
                    <div
                        data-testid="pok-list"
                        className="row g-2 justify-content-center m-auto pok-list"
                    >
                        {renderList}
                    </div>
                </>
            )}
        </div>
    );
};

export default CatchPokemonPage;
