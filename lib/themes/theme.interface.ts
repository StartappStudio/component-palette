export interface IComponentPaletteTheme {
    palette: {
        background: string;
    };
    groupHeader: {
        textColor: string;
        background: string;
    };
    paletteItem: {
        borderColor: string;
        iconColor: string;
        hoverIconColor: string;
        hoverBackgroundColor: string;
        hoverShadowColor: string;
        hoverBorderColor: string;
        tooltipTextColor: string;
        tooltipBackgroundColor: string;
        tooltipBorderColor: string;
        tooltipShadowColor: string;
    };
    typography: ITypographyTheme;
}

export interface ITypographyTheme {
    sizes: {
        text: string;
        title: string;
    };
    font: string;
    weights: {
        bold: string;
    };
}
