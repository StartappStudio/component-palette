import * as styledComponents from 'styled-components';
import { IComponentPaletteTheme } from './themes/theme.interface';

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IComponentPaletteTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
