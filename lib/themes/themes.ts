import { IComponentPaletteTheme } from './theme.interface';

export const lightTheme: IComponentPaletteTheme = {
    palette: {
        background: '#fff'
    },
    groupHeader: {
        textColor: '#fff',
        background: '#03a9f4'
    },
    paletteItem: {
        borderColor: '#eaeff3',
        iconColor: '#b6b6b6',
        hoverIconColor: '#03a9f4',
        hoverBackgroundColor: '#fff',
        hoverShadowColor: 'rgba(0, 0, 1, 0.2)',
        hoverBorderColor: 'rgb(213, 215, 218)',
        tooltipTextColor: '#fff',
        tooltipBackgroundColor: '#1a1a1a',
        tooltipBorderColor: 'rgb(213, 215, 218)',
        tooltipShadowColor: 'rgba(0, 0, 1, 0.15)'
    },
    typography: {
        sizes: {
            text: '0.75rem',
            title: '0.8125rem'
        },
        font: '"Roboto", sans-serif',
        weights: {
            bold: '700'
        }
    }
};

export const darkTheme: IComponentPaletteTheme = {
    palette: {
        background: '#333333'
    },
    groupHeader: {
        background: '#084771',
        textColor: '#fff'
    },
    paletteItem: {
        borderColor: 'transparent',
        iconColor: '#DBDBDB',
        hoverIconColor: '#fff',
        hoverBackgroundColor: 'transparent',
        hoverShadowColor: 'transparent',
        hoverBorderColor: '#084771',
        tooltipTextColor: '#fff',
        tooltipBackgroundColor: '#084771',
        tooltipBorderColor: '#084771',
        tooltipShadowColor: 'rgba(0, 0, 1, 0.15)'
    },
    typography: {
        sizes: {
            text: '0.75rem',
            title: '0.8125rem'
        },
        font: '"Roboto", sans-serif',
        weights: {
            bold: '700'
        }
    }
};
