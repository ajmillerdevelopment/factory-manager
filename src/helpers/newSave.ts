import { ISave } from "../models/ISave";
import { nanoid } from "nanoid";
import { writeFile } from "fs";

export default function newSave(vanilla: boolean, saveName: string) {
    if (vanilla) {
    } else {
        const timeStamp = Date.now();
        const newSave = {
            saveName: saveName,
            saveId: nanoid(),
            created: timeStamp,
            lastSaved: timeStamp,
            userTags: [],
            reference: {
                tags: [],
                equipment: [],
                units: [],
            },
        } as ISave;
        // const downloadTrigger = document.createElement('button')
        const a = document.createElement("a");
        a.href = URL.createObjectURL(
            new Blob([JSON.stringify(newSave)], { type: "application/json" })
        );
        a.download = `${saveName}.json`;
        a.click();
        a.remove();
        return newSave;
    }
}
