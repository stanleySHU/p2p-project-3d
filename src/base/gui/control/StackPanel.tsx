import { StackPanel as BabylonStackPanel} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Container'

export type IStackPanelProps = {
    name?: string | undefined
}

export type IStackPanelParams = {

}

function StackPanelHOC<T>(EL: React.FC<T>) {
    return (props: T & IStackPanelParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StackPanelHOC(e));
}

function _(props: IStackPanelProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonStackPanel(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PStackPanel = buildExtends<IStackPanelProps & IStackPanelParams>(_); 