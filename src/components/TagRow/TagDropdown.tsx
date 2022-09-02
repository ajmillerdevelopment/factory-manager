import React from "react";
import { ISave } from "../../models/ISave";

type tagDropdownProps = {
    game: ISave;
};

export default function TagDropdown(props: tagDropdownProps) {
    const { game } = props;
    const tagChoices = game.reference.tags
        .filter((tag) => !game.userTags.includes(tag))
        .map((tag) => {
            return <button onClick={() => {}}>{tag.tagName}</button>;
        });
    return <div></div>;
}
