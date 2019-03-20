export interface IPaletteComponentDescriptor {
    name: string;
    title: string;
    group?: string;
    element: React.ReactElement<any>;
}

export class ComponentPaletteRegistry {
    private componentMap = new Map<string, IPaletteComponentDescriptor>();

    public register(descriptor: IPaletteComponentDescriptor) {
        this.componentMap.set(descriptor.name, descriptor);
    }

    public get components(): IPaletteComponentDescriptor[] {
        return Array.from(this.componentMap.values());
    }
}
