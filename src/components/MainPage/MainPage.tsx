import React, { useState } from "react";
import { ISave, ITag } from "../../models/ISave";
import TagDropdown from "../TagRow/TagDropdown";
import TagRow from "../TagRow/TagRow";
import PaneContent from "./PaneContent";

type mainPageProps = {
    game: ISave;
    setGame: React.Dispatch<React.SetStateAction<ISave | null>>;
};

export default function MainPage(props: mainPageProps) {
    const { game, setGame } = props;
    const [activeTag, setActiveTag] = useState<ITag | null>(null);

    if (game.userTags.length > 1) {
        setActiveTag(game.userTags[0]);
    }

    return (
        <div>
            <header>
                <h6>HOI4 Production Manager</h6>
                <h1>{game.saveName}</h1>
                <button>Log Out</button>
            </header>
            <main>
                <TagRow setActiveTag={setActiveTag} game={game} />
                <div id="pane">
                    {game.userTags.length < 1 && <TagDropdown game={game} />}
                    <div id="pane-content">
                        {game.userTags.length < 1 ? (
                            <p>Add a tag to get started...</p>
                        ) : (
                            <PaneContent />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
