import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    fetchPokemons,
    getCatchedPokemons,
} from "../features/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import PokemonItem from "./PokemonItem";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";

const CatchPokemonPage = () => {
    const dispatch = useDispatch();
    const { pokemonItems, catchedPokemons } = useSelector(
        (state) => state.pokemon
    );
    const [hide, setHide] = useState(true);
    const randomNum = () => Math.floor(Math.random() * 20) * 10;

    useEffect(() => {
        dispatch(fetchPokemons(randomNum()));
        dispatch(getCatchedPokemons());
        setTimeout(() => setHide(false), 800);
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
                    <p className="mb-0 go-back-txt">Go back</p>
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
            {hide ? (
                <div style={{ marginTop: "100px" }}>
                    <Loader />
                </div>
            ) : (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <div
                            data-testid="pok-list"
                            className="row g-2 justify-content-center m-auto pok-list"
                        >
                            {renderList}
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default CatchPokemonPage;
