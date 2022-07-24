export interface ISave {
    saveName: string;
    saveId: string;
    // userName: string;
    created: number;
    lastSaved: number;
    userTags: Array<ITag>;
    reference: {
        tags: Array<ITag>;
        equipment: Array<IEquipmentType>;
        units: Array<IUnit>;
    };
}
export interface ITag {
    tagName: string;
    tag: string;
    templates: Array<ITemplate>;
    equipment: Array<IEquipment>;
    productionBlock: Array<IProdBlock>;
    supplyData: Array<ISupplyData>;
    totalMilFactories: number;
}
export interface ITemplate {
    templateName: string;
    templateId: number;
    units: Array<IUnit>; //array position determins position in grid
}
export interface IEquipment {
    equipmentName: string;
    cost: number;
}
export interface IEquipmentType {
    equipmentTypeName: string;
    equipment: Array<IEquipment>;
}
export interface IProdBlock {
    template: ITemplate;
    quantity: number;
    inQueue: number;
}
export interface ISupplyData {
    equipment: IEquipment;
    inService: number;
    inStockpile: number;
    reserved: number;
}
export interface IUnit {
    unitName: string;
    neededEquipment: Array<{ equipment: IEquipmentType; quantity: number }>;
}
