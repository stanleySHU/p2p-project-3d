import { SelectionPanel as BabylonSelectionPanel, SelectorGroup} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IRectangleParams } from './Rectangle'

export type ISelectionPanelProps = IComponentProps<BabylonSelectionPanel> & {
    name: string,
    groups?: SelectorGroup[]
}

export type ISelectionPanelParams = IRectangleParams & {

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
    const { init, name, groups } = props;
    useLayoutEffect(() => {
        let obj = new BabylonSelectionPanel(name, groups);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSelectionPanel = buildExtends<ISelectionPanelProps & ISelectionPanelParams>(_); 