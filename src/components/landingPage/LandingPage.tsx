import React, { useState } from "react";
import newSave from "../../helpers/newSave";

export default function LandingPage() {
    const [gameName, setGameName] = useState("");
    return (
        <div className="flex page flex-col items-center">
            <header className="mt-24 flex flex-col items-center">
                <h1 className="underline font-display text-7xl">
                    HOI4 Production Manager
                </h1>
                <a
                    className="mt-12 font-body"
                    href="https://github.com/ajmillerdevelopment/factory-manager"
                >
                    https://github.com/ajmillerdevelopment/factory-manager
                </a>
            </header>
            <main className="w-full flex flex-col items-center">
                <div
                    id="new-game-box"
                    className="bg-zinc-900 border-slate-500 flex flex-col items-center border w-6/12"
                >
                    <h2 className="font-display text-4xl text-center mt-6">
                        Create New Game File
                    </h2>
                    <input
                        type="text"
                        name="game-name"
                        placeholder="Your Game Name"
                        id="game-name-input"
                        className="mt-2"
                    />
                    <p className="mt-4 font-body">Choose your preset:</p>
                    <div
                        id="preset-buttons"
                        className="flex flex-row w-full justify-center"
                    >
                        <button
                            className="border border-slate-500 flex flex-col items-center w-4/12 m-4"
                            id="vanilla-button"
                            onClick={() => {
                                newSave(true, gameName);
                            }}
                        >
                            <h3 className="font-display text-4xl mt-4">
                                Vanilla
                            </h3>
                            <p className="font-body m-4">
                                Start with vanilla values (you can still change
                                these later)
                            </p>
                        </button>
                        <button
                            className="border border-slate-500 flex flex-col items-center w-4/12 m-4"
                            id="vanilla-button"
                            onClick={() => {
                                newSave(false, gameName);
                            }}
                        >
                            <h3 className="font-display text-4xl mt-4">
                                Blank
                            </h3>
                            <p className="font-body m-4">
                                Start without any pre-set values (for use with
                                overhaul mods)
                            </p>
                        </button>
                    </div>
                </div>
                <button
                    id="load-game-button"
                    className="border border-slate-500 bg-zinc-900 flex flex-col items-center justify-center h-24 w-2/12 m-4"
                >
                    <h3 className="font-display text-2xl">Load Game File</h3>
                </button>
            </main>
        </div>
    );
}
