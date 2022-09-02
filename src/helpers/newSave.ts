import { ISave } from "../models/ISave";
import { nanoid } from "nanoid";
import { writeFile } from "fs";
import vanillaValues from "./vanillaValues.json";

const populateVanillaValues = () => {
    const tags = Object.entries(vanillaValues.tags).map((arr) => {
        return {
            tag: arr[0],
            tagName: arr[1],
            templates: [],
            equipment: [],
            productionBlock: [],
            supplyData: [],
            totalMilFactories: 0,
        };
    });
    const equip = Object.entries(vanillaValues.equipment).map((arr) => {
        return {
            equipmentTypeName: arr[0],
            equipment: Object.entries(arr[1]).map((innerArr) => {
                return {
                    equipmentName: innerArr[0],
                    cost: innerArr[1],
                };
            }),
        };
    });
    const units = Object.entries(vanillaValues.units).map((arr) => {
        return {
            unitName: arr[0],
            neededEquipment: arr[1],
        };
    });
    return {
        tags: tags,
        equipment: equip,
        units: units,
    };
};

export default function newSave(vanilla: boolean, saveName: string) {
    if (vanilla) {
        const timeStamp = Date.now();
        const newSave = {
            saveName: saveName,
            saveId: nanoid(),
            created: timeStamp,
            lastSaved: timeStamp,
            userTags: [],
            reference: populateVanillaValues(),
        } as unknown as ISave;
        return newSave;
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
        return newSave;
    }
}
