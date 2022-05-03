import { render, screen } from "./test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import CatchPokemonPage from "../components/CatchPokemonPage";

test("component renders", () => {
    render(
        <Router>
            <CatchPokemonPage />
        </Router>
    );

    expect(screen.getByText(/Catch 'em all!/i)).toBeInTheDocument();
});
