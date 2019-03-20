/// <reference types="react" />
import * as styledComponents from 'styled-components';
import { IComponentPaletteTheme } from './themes/theme.interface';
declare const styled: styledComponents.ThemedBaseStyledInterface<IComponentPaletteTheme>, css: styledComponents.BaseThemedCssFunction<IComponentPaletteTheme>, createGlobalStyle: <P extends object = {}>(first: styledComponents.CSSObject | TemplateStringsArray | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, IComponentPaletteTheme>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, IComponentPaletteTheme>>[]) => styledComponents.GlobalStyleComponent<P, IComponentPaletteTheme>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<IComponentPaletteTheme, IComponentPaletteTheme>, any>;
export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
