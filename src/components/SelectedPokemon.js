import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedPokemon } from "../features/pokemon/pokemonSlice";
import { motion, AnimatePresence } from "framer-motion";

const SelectedPokemon = () => {
    const { selectedPokemon } = useSelector((state) => state.pokemon);
    const { abilities, name, sprites, stats, types } = selectedPokemon;
    const dispatch = useDispatch();
    const objLength = Object.keys(selectedPokemon).length;
    let renderAbilities;
    let renderTypes;
    let renderStats;

    useEffect(() => {
        dispatch(getSelectedPokemon());
    }, [dispatch]);

    const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

    if (objLength > 0) {
        renderAbilities = abilities.map((ability, idx) => (
            <p className="py-2 px-3 abilities " key={idx}>
                {capitalize(ability.ability.name)}
            </p>
        ));

        renderTypes = types.map((type, idx) => (
            <p className="py-2 px-3 types " key={idx}>
                {capitalize(type.type.name)}
            </p>
        ));

        renderStats = stats.map((stat, idx) => (
            <p className="mb-1 " key={idx}>{`${capitalize(stat.stat.name)}: ${
                stat.base_stat
            }`}</p>
        ));
    }

    return (
        <>
            {objLength > 0 && (
                <div style={{ color: "white" }}>
                    <Link to="/" className="home-link">
                        <div className="d-flex justify-content-start align-items-center go-back-container ">
                            <button className="btn p-2">
                                <i className="fa-solid fa-arrow-left go-back-btn p-2 rounded-circle"></i>
                            </button>
                            <p className="mb-0 go-back-txt">Go back</p>
                        </div>
                    </Link>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div>
                                <header className="mb-4">
                                    <h2 className="selected-name fw-bold">
                                        <i className="fa-solid fa-circle-dot me-2" />
                                        {capitalize(name)}
                                        <i className="fa-solid fa-circle-dot ms-2" />
                                    </h2>
                                </header>
                                <div>
                                    <div className=" selected-img-cont rounded-circle m-auto">
                                        <img
                                            src={
                                                sprites.other.home.front_default
                                            }
                                            className="selected-img img-fluid"
                                            alt={name}
                                        />
                                    </div>
                                    <div className="row mt-5 m-auto types-abil-div">
                                        <div className="col-sm-4 mb-3">
                                            <h4 className="selected fw-bold">
                                                Abilities
                                            </h4>
                                            <div>{renderAbilities}</div>
                                        </div>
                                        <div className="col-sm-4 mb-3">
                                            <h4 className="selected fw-bold">
                                                Stats
                                            </h4>
                                            <div>{renderStats}</div>
                                        </div>
                                        <div className="col-sm-4 mb-3">
                                            <h4 className="selected fw-bold">
                                                Types
                                            </h4>
                                            <div>{renderTypes}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </>
    );
};

export default SelectedPokemon;
