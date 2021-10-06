import { SelectionPanel as BabylonSelectionPanel, SelectorGroup } from '@babylonjs/gui';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component'; 
import { IRectangleInitial, buildExtends as _buildExtends } from './Rectangle';

export type ISelectionPanelInitial<T> = IRectangleInitial<T> & {
    name: string,
    groups?: SelectorGroup[]
}
export type ISelectionPanelProps = ISelectionPanelInitial<BabylonSelectionPanel>;

export function SelectionPanelHOC<T>(EL: React.FC<T>) {
    return (props: T & ISelectionPanelProps) => {
        const { instance, name, groups } = props;
        useEffect(() => {
            console.log(`SelectionPanel ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonSelectionPanel(name, groups);
                console.log(`SelectionPanel ${name} created`);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends(SelectionPanelHOC(e));
}

export const P2PSelectionPanel = buildExtends(ChildHOC(null));