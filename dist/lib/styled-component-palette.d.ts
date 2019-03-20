import * as React from 'react';
import { IComponentPalletteProps } from './component-palette';
import { IComponentPaletteTheme } from './themes/theme.interface';
interface IStyledComponentPaletteProps extends IComponentPalletteProps {
    theme: IComponentPaletteTheme;
}
export declare class StyledComponentPalette extends React.Component<IStyledComponentPaletteProps> {
    render(): JSX.Element;
}
export {};
