import * as React from 'react';
import { ComponentPallette, IComponentPalletteProps } from './component-palette';
import { ThemeProvider } from './styled-components';
import { IComponentPaletteTheme } from './themes/theme.interface';

interface IStyledComponentPaletteProps extends IComponentPalletteProps {
    theme: IComponentPaletteTheme;
}

export class StyledComponentPalette extends React.Component<IStyledComponentPaletteProps> {
    public render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <ComponentPallette
                    registry={this.props.registry}
                    onDragStart={(event, name) => this.props.onDragStart(event, name)}>
                </ComponentPallette>
            </ThemeProvider>
        );
    }
}
