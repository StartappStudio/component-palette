import styled from './styled-components';

export const Palette = styled.div<{collapsed: boolean}>`
    display: flex;
    flex-wrap: wrap;
    background: ${(props) => props.theme.palette.background};
    padding: 7px 7px 35px;
    overflow: auto;
    display: ${(props) => props.collapsed ? 'none' : 'flex'};
`;

export const PaletteItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 62px;
    height: 62px;
    position: relative;
    border: 1px solid ${(props) => props.theme.paletteItem.borderColor};
    margin-top: -1px;
    margin-right: -1px;
    cursor: pointer;

    svg {
      width: 40px;
      max-width: 100%;
      max-height: 100%;
      fill: ${(props) => props.theme.paletteItem.iconColor};
    }

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.paletteItem.hoverBackgroundColor};
        box-shadow: 0px 0px 9px 0px ${(props) => props.theme.paletteItem.hoverShadowColor};
        border: 1px solid ${(props) => props.theme.paletteItem.hoverBorderColor};
        transition: opacity 0.2s;
        z-index: 100;

        svg {
          fill: ${(props) => props.theme.paletteItem.hoverIconColor};
        }
        .component-palette-tooltip{
          margin-left: 0;
          visibility: visible;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
    }
    &:active .component-palette-tooltip{
      visibility: hidden;
      margin-left: -9999px;
      opacity: 0;
    }
`;

export const Tooltip = styled.div`
    position: absolute;
    width: 100%;
    top:100%;
    left: 0;
    margin-top: 5px;
    padding: 7px 0;
    text-align: center;
    word-wrap: break-word;
    font-family: ${(props) => props.theme.typography.font};
    font-size: ${(props) => props.theme.typography.sizes.text};
    line-height: 1;
    background-color: ${(props) => props.theme.paletteItem.tooltipBackgroundColor};
    color: ${(props) => props.theme.paletteItem.tooltipTextColor};
    border: 1px solid ${(props) => props.theme.paletteItem.tooltipBorderColor};
    border-radius: 3px;
    box-shadow: 0px 3px 12px 0px ${(props) => props.theme.paletteItem.tooltipShadowColor};
    z-index: 145;
    visibility: hidden;
    margin-left: -9999px;
    opacity: 0;

    &:after{
        content: '';
        display: block;
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -2px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 2px 4px 2px;
        border-color: transparent transparent ${(props) => props.theme.paletteItem.tooltipBackgroundColor} transparent;
    }
    &:before{
        content: '';
        display: block;
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -3px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 3px 5px 3px;
        border-color: transparent transparent ${(props) => props.theme.paletteItem.tooltipBackgroundColor} transparent;
    }
`;

export const GroupHeader = styled.div`
    line-height: 1;
    top:100%;
    left: 0;
    margin-top: 5px;
    padding: 7px;
    font-family: ${(props) => props.theme.typography.font};
    font-size: ${(props) => props.theme.typography.sizes.title};
    font-weight: ${(props) => props.theme.typography.weights.bold};
    color: ${(props) => props.theme.groupHeader.textColor};
    background-color: ${(props) => props.theme.groupHeader.background};
    cursor: pointer;
`;

export const PalleteGroup = styled.div``;
