/// <reference types="xrm" />
import { OptionSetValueMock } from "../../optionsetvalue/optionsetvalue.mock";
import { OptionSetControlMock } from "../../page/optionsetcontrol/optionsetcontrol.mock";
import { EnumAttributeMock, IEnumAttributeComponents } from "../enumattribute/enumattribute.mock";
export declare class OptionSetAttributeMock extends EnumAttributeMock<OptionSetControlMock, number> implements Xrm.Page.OptionSetAttribute {
    static create(name: string, value?: number): OptionSetAttributeMock;
    private static defaultComponents(components);
    options: OptionSetValueMock[];
    selectedOption: OptionSetValueMock;
    constructor(components: IOptionSetAttributeComponents);
    getFormat(): Xrm.Page.OptionSetAttributeFormat;
    getOption(param: number | string): Xrm.Page.OptionSetValue;
    getOptions(): Xrm.Page.OptionSetValue[];
    getSelectedOption(): Xrm.Page.OptionSetValue;
    getText(): string;
    setValue(value: number): void;
}
export interface IOptionSetAttributeComponents extends IEnumAttributeComponents<OptionSetControlMock, number> {
    format?: Xrm.Page.OptionSetAttributeFormat;
    options?: Xrm.Page.OptionSetValue[];
    selectedOption?: Xrm.Page.OptionSetValue;
}