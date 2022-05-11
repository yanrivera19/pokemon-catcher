import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import {
    catchPokemon,
    changeName,
    releasePokemon,
} from "../features/pokemon/pokemonSlice";

const Modal = () => {
    const dispatch = useDispatch();
    const { selectedPokemon } = useSelector((state) => state.pokemon);
    const { types } = selectedPokemon;
    const [newName, setNewName] = useState(selectedPokemon.name);
    const location = useLocation();

    const renderTypes = types.map(
        (type) => type.type.name[0].toUpperCase() + type.type.name.slice(1)
    );

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(changeName(newName));
    };

    return (
        <div className="mod-container d-flex align-items-center justify-content-center">
            <div className="mod text-center">
                {location.pathname === "/" ? (
                    <>
                        <h5 className="fw-bold">
                            Are you sure you want to release this pokémon?
                        </h5>
                        <div className="btn-container mt-5">
                            <button
                                type="button"
                                className="btn me-3 btn-outline release-red-btn "
                                onClick={() => {
                                    dispatch(
                                        releasePokemon(selectedPokemon.id)
                                    );
                                    dispatch(closeModal());
                                }}
                            >
                                Release
                            </button>
                            <button
                                type="button"
                                className="btn me-3 btn-outline cancel-btn"
                                onClick={() => {
                                    dispatch(closeModal());
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h5 className="mb-4 fw-bold">
                            Types: {renderTypes.join(", ")}
                        </h5>
                        <div className="mb-4">
                            <form
                                onSubmit={onSubmit}
                                className="d-flex m-auto name-form input-group align-items-center justify-content-center"
                            >
                                <input
                                    id="nameInput"
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="form-control"
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    className="btn change-name-btn mt-0 btn-outline-secondary"
                                >
                                    Change name
                                </button>
                            </form>
                        </div>
                        <div className="btn-container">
                            <button
                                type="button"
                                className="btn me-3 mt-3 btn-success catch-btn"
                                onClick={() => {
                                    dispatch(catchPokemon(selectedPokemon));
                                    dispatch(closeModal());
                                }}
                            >
                                Catch
                            </button>
                            <button
                                type="button"
                                className="btn me-3 mt-3 cancel-btn"
                                onClick={() => {
                                    dispatch(closeModal());
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
