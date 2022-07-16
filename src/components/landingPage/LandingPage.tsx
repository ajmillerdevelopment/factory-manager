import React from "react";

export default function LandingPage() {
    return (
        <div>
            <header>
                <h1 className="underline font-display">
                    HOI4 Production Manager
                </h1>
                <a href="https://github.com/ajmillerdevelopment/factory-manager">
                    https://github.com/ajmillerdevelopment/factory-manager
                </a>
            </header>
            <main>
                <div id="new-game-box">
                    <h2>Create New Game File</h2>
                    <p>Game Name</p>
                    <input
                        type="text"
                        name="game-name"
                        placeholder="Your Game Name"
                        id="game-name-input"
                    />
                    <p>Choose your preset:</p>
                    <div id="preset-buttons">
                        <button id="vanilla-button">Vanilla</button>
                        <button id="vanilla-button">Blank</button>
                    </div>
                </div>
                <button id="load-game-button">Load Game File</button>
            </main>
        </div>
    );
}
