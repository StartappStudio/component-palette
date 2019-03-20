import * as React from 'react';
import { ComponentPaletteRegistry } from './component-registry';
export interface IComponentPalletteProps {
    registry: ComponentPaletteRegistry;
    onDragStart: (event: React.DragEvent, name: string) => void;
}
interface IComponentPalletteState {
    collapsed: boolean[];
}
export declare class ComponentPallette extends React.Component<IComponentPalletteProps, IComponentPalletteState> {
    private groups;
    private items;
    constructor(props: IComponentPalletteProps);
    render(): JSX.Element;
    private collapse;
}
export {};
