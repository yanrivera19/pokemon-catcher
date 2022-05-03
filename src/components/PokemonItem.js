import { useState } from "react";
import { selectPokemon } from "../features/pokemon/pokemonSlice";
import { openModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const PokemonItem = ({ traits, catched }) => {
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    const { abilities, name, sprites, id } = traits;
    const navigate = useNavigate();
    const location = useLocation();

    const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

    const ability = abilities.map((ability, idx) => (
        <p className="m-0 pb-1 fw-bold" key={idx}>
            {capitalize(ability.ability.name)}
        </p>
    ));

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className="col-sm-4 poke-card" key={id} onClick={toggleClass}>
            <div
                className="card poke-card-inner"
                style={{
                    transform: `${isActive ? "rotateY(180deg)" : ""}`,
                }}
            >
                <div className="card-body poke-card-front">
                    <h5 className="card-title">{capitalize(name)}</h5>
                    <div className="img-container m-0 rounded-circle">
                        <img
                            src={sprites.other.dream_world.front_default}
                            className="card-img"
                            alt={name}
                        />
                    </div>
                </div>
                <div className="card-body poke-card-back">
                    <h5 className="card-title fw-bold">Abilities:</h5>
                    {ability}
                    {location.pathname === "/catch-pokemon" ? (
                        catched === true ? (
                            <div className="check-icon-container">
                                <i className="check-icon fa-solid fa-circle-check rounded-circle" />
                            </div>
                        ) : (
                            <div className="detail-btn-container">
                                <button
                                    className="btn mt-2 catch-pok-btn"
                                    onClick={() => {
                                        dispatch(selectPokemon(traits));
                                        dispatch(openModal());
                                    }}
                                >
                                    Catch
                                </button>
                            </div>
                        )
                    ) : (
                        <div className="detail-btn-container">
                            <button
                                className="btn details-btn mt-2 me-2"
                                onClick={() => {
                                    dispatch(selectPokemon(traits));
                                    navigate(`/${name}`);
                                }}
                            >
                                Details
                            </button>
                            <button
                                className="btn release-btn mt-2"
                                onClick={() => {
                                    dispatch(selectPokemon(traits));
                                    dispatch(openModal());
                                }}
                            >
                                Release
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PokemonItem;
