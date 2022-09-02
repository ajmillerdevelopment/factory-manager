import React, { useState } from "react";
import "./global.css";
import LandingPage from "./components/landingPage/LandingPage";
import { ISave } from "./models/ISave";
import MainPage from "./components/MainPage/MainPage";

function App() {
    const [game, setGame] = useState<ISave | null>(null);
    return (
        <div className="App">
            {game ? (
                <MainPage game={game} setGame={setGame} />
            ) : (
                <LandingPage setGame={setGame} />
            )}
        </div>
    );
}

export default App;
