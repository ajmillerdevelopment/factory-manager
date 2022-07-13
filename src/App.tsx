import React, { useState } from "react";
import "./App.css";
import SaveManager from "./components/SaveManager";

function App() {
    const [save, setSave] = useState(null);
    return (
        <div className="App">{!save && <SaveManager setSave={setSave} />}</div>
    );
}

export default App;
