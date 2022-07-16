import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/landingPage/landingPage";
import { ISave } from "./models/ISave";

function App() {
    const [save, setSave] = useState<ISave | null>(null);
    return <div className="App">{save && <LandingPage />}</div>;
}

export default App;
