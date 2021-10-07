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
            if (instance && !instance.current) {
                instance.current = new BabylonSelectionPanel(name, groups);
            }
        }, []);
        return <EL {...props}/>;
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SelectionPanelHOC(e));
}

export const P2PSelectionPanel = buildExtends<ISelectionPanelProps>(ChildHOC(null));