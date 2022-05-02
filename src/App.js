import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CatchPokemonPage from "./components/CatchPokemonPage";
import HomePage from "./components/HomePage";
import SelectedPokemon from "./components/SelectedPokemon";
import Modal from "./components/Modal";

function App() {
    const { isOpen } = useSelector((state) => state.modal);

    return (
        <div className="container App my-5">
            {isOpen && <Modal />}
            <header className="my-5">
                <h1 className="app-header">Pokémon Catcher</h1>
            </header>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/:namePokemon"} element={<SelectedPokemon />} />
                <Route path={"/catch-pokemon"} element={<CatchPokemonPage />} />
            </Routes>
        </div>
    );
}

export default App;
