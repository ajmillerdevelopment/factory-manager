import React, { useState } from "react";
import "./global.css";
import LandingPage from "./components/landingPage/LandingPage";
import { ISave } from "./models/ISave";

function App() {
    const [save, setSave] = useState<ISave | null>(null);
    return <div className="App">{!save && <LandingPage />}</div>;
}

export default App;
