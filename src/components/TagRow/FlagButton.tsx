import React from "react";
import { ITag } from "../../models/ISave";

type flagButtonProps = {
    setActiveTag: React.Dispatch<React.SetStateAction<ITag | null>>;
    tag: ITag;
};

export default function FlagButton(props: flagButtonProps) {
    const { setActiveTag, tag } = props;
    return (
        <div>
            <button onClick={() => setActiveTag(tag)}>{tag.tag}</button>{" "}
            {/* placeholder, will add flag graphics programatically*/}
        </div>
    );
}
