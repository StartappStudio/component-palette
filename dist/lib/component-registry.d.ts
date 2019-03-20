/// <reference types="react" />
export interface IPaletteComponentDescriptor {
    name: string;
    title: string;
    group?: string;
    element: React.ReactElement<any>;
}
export declare class ComponentPaletteRegistry {
    private componentMap;
    register(descriptor: IPaletteComponentDescriptor): void;
    readonly components: IPaletteComponentDescriptor[];
}
