import * as React from 'react';

import {
    GroupHeader,
    Palette,
    PaletteItem,
    PalleteGroup,
    Tooltip
} from './component-palette.style';

import { ComponentPaletteRegistry } from './component-registry';

export interface IComponentPalletteProps {
    registry: ComponentPaletteRegistry;
    onDragStart: (event: React.DragEvent, name: string) => void;
}

interface IComponentPalletteState {
    collapsed: boolean[];
}

export class ComponentPallette extends React.Component<IComponentPalletteProps, IComponentPalletteState> {

    private groups: string[];
    private items: { [key: string]: React.ReactElement[] } = {};

    constructor(props: IComponentPalletteProps) {
        super(props);

        const descriptors = this.props.registry
            .components
            .map((item) => {
                return item.group ? { ...item } : { ...item, group: 'Other' };
            });

        this.groups = descriptors
            .map((item) => item.group)
            .reduce((prev: string[], curr: string) => {
                if (!prev.includes(curr)) {
                    prev.push(curr);
                }
                return prev;
            }, []);

        this.groups
            .forEach((group) => {
                const groupped = descriptors.filter((item) => item.group === group);
                this.items[group] = groupped.map((descriptor, index) =>
                    <PaletteItem key={index} draggable onDragStart={(event) => this.props.onDragStart(event, descriptor.name)}>
                        <Tooltip className='component-palette-tooltip'>{descriptor.title}</Tooltip>
                        {descriptor.element}
                    </PaletteItem>
                );
            });

        this.state = {
            collapsed: this.groups.map(() => true)
        };

        this.state.collapsed[0] = false;
    }

    public render() {
        const rows = Object.keys(this.items)
            .sort()
            .map((group, index: number) => {
                return (
                    <PalleteGroup key={index}>
                        <GroupHeader onClick={() => this.collapse(index)}>{group}</GroupHeader>
                        <Palette collapsed={this.state.collapsed[index]}>
                            {...this.items[group]}
                        </Palette>
                    </PalleteGroup>
                );
        });

        return <div> {...rows} </div>;
    }

    private collapse(index: number) {
        const collapsed = this.state.collapsed;
        collapsed[index] = !collapsed[index];

        this.setState({ collapsed });
    }
}
