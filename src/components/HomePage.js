import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PokemonItem from "./PokemonItem";
import { getCatchedPokemons } from "../features/pokemon/pokemonSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const { catchedPokemons } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(getCatchedPokemons());
    }, [dispatch]);

    const renderList = catchedPokemons.map((pokemon) => (
        <PokemonItem traits={pokemon} key={pokemon.id} />
    ));

    return (
        <div>
            {catchedPokemons.length > 0 ? (
                <>
                    <Link to="/catch-pokemon">
                        <button className="btn fs-5 catch-pok-btn home-catch-btn mt-2 mb-4">
                            Catch a Pokémon!
                        </button>
                    </Link>
                    <header className="pok-header mb-4 mt-3">
                        <h3 className="fw-bold">
                            <i className="fa-solid fa-circle-dot me-2" />
                            My Pokémons
                            <i className="fa-solid fa-circle-dot ms-2" />
                        </h3>
                    </header>
                    <div className="row g-2 justify-content-center m-auto pok-list">
                        {catchedPokemons.length > 0 && renderList}
                    </div>
                </>
            ) : (
                <Link to="/catch-pokemon">
                    <button
                        id="home-btn"
                        className="btn catch-pok-btn px-4 mb-3"
                    >
                        Catch a Pokémon!
                    </button>
                </Link>
            )}
        </div>
    );
};

export default HomePage;
