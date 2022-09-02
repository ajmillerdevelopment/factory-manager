import React, { useState } from "react";
import { ISave, ITag } from "../../models/ISave";
import TagRow from "../TagRow/TagRow";

export default function FactoryManager(save: ISave) {
    const [game, setGame] = useState<ISave>(save);
    const [activeTag, setActiveTag] = useState<ITag | null>(null);
    return (
        <div>
            <header>
                <h6>HOI4 Production Manager</h6>
                <h1>{save.saveName}</h1>
                <button>Log Out</button>
            </header>
            <main>
                <TagRow setActiveTag={setActiveTag} game={game} />
            </main>
        </div>
    );
}
