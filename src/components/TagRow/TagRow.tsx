import React from "react";
import { ISave, ITag } from "../../models/ISave";
import FlagButton from "./flagButton/flagButton";

type tagRowProps = {
    setActiveTag: React.Dispatch<React.SetStateAction<ITag | null>>;
    game: ISave;
};

export default function TagRow(props: tagRowProps) {
    const { setActiveTag, game } = props;
    let tags;
    if (game.userTags.length < 1) {
        tags = null;
    } else {
        tags = game.userTags.map((tag) => {
            return <FlagButton setActiveTag={setActiveTag} tag={tag} />;
        });
    }
    return (
        <div>
            {tags}
            <button id="add-tag-button" />
        </div>
    );
}
