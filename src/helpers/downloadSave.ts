import { ISave } from "../models/ISave";

export default function download(file: ISave, saveName: string) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
        new Blob([JSON.stringify(file)], { type: "application/json" })
    );
    a.download = `${saveName}.json`;
    a.click();
    a.remove();
}
