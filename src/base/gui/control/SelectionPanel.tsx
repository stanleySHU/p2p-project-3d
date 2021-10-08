import { SelectionPanel as BabylonSelectionPanel, SelectorGroup} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Rectangle'

export type ISelectionPanelProps = IComponentProps<BabylonSelectionPanel> & {
    name: string,
    groups?: SelectorGroup[]
}

export type ISelectionPanelParams = {

}

function SelectionPanelHOC(EL: React.FC) {
    return (props: ISelectionPanelParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SelectionPanelHOC(e));
}

function _(props: ISelectionPanelProps) {
    const { instance, name, groups } = props;
    useEffect(() => {
        instance!.current = new BabylonSelectionPanel(name, groups);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSelectionPanel = buildExtends<ISelectionPanelProps & ISelectionPanelParams>(_); 