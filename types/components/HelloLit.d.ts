import { LitElement } from 'lit';
export declare type Person = {
    name: string;
    age: number;
};
export declare class HelloLit extends LitElement {
    name: string;
    array: never[];
    _onClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
