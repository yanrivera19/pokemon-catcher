import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import React from "react";
import Loader from "./components/Loader";
const CatchPokemonPage = lazy(() => import("./components/CatchPokemonPage"));
const HomePage = lazy(() => import("./components/HomePage"));
const SelectedPokemon = lazy(() => import("./components/SelectedPokemon"));

function App() {
    const { isOpen } = useSelector((state) => state.modal);
    const style = {
        marginTop: "300px",
    };

    return (
        <div className="App">
            <div className="container my-5">
                {isOpen && <Modal />}
                <header className="my-5">
                    <h1 className="app-header">Pokémon Catcher</h1>
                </header>
                <Routes>
                    <Route
                        exact
                        path={"/"}
                        element={
                            <Suspense
                                fallback={
                                    <div style={style}>
                                        <Loader />
                                    </div>
                                }
                            >
                                <HomePage />
                            </Suspense>
                        }
                    />
                    <Route
                        path={"/:namePokemon"}
                        element={
                            <Suspense
                                fallback={
                                    <div style={style}>
                                        <Loader />
                                    </div>
                                }
                            >
                                <SelectedPokemon />
                            </Suspense>
                        }
                    />
                    <Route
                        path={"/catch-pokemon"}
                        element={
                            <Suspense
                                fallback={
                                    <div style={style}>
                                        <Loader />
                                    </div>
                                }
                            >
                                <CatchPokemonPage />
                            </Suspense>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
