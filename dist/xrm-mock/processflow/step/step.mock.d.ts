export declare class StepMock implements Xrm.ProcessFlow.Step {
    required: boolean;
    name: string;
    attribute: string;
    constructor(name: string, attribute: string, required: boolean);
    getAttribute(): string;
    getName(): string;
    isRequired(): boolean;
}
