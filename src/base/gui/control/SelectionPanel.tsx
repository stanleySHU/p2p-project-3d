import { SelectionPanel as BabylonSelectionPanel, SelectorGroup} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Rectangle'

export type ISelectionPanelProps = {
    name: string,
    groups?: SelectorGroup[]
}

export type ISelectionPanelParams = {

}

function SelectionPanelHOC<T>(EL: React.FC<T>) {
    return (props: T & ISelectionPanelParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SelectionPanelHOC(e));
}

function _(props: ISelectionPanelProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, groups } = props;
    useEffect(() => {
        let obj = new BabylonSelectionPanel(name, groups);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSelectionPanel = buildExtends<ISelectionPanelProps & ISelectionPanelParams>(_); 