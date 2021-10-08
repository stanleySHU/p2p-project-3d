import { StackPanel as BabylonStackPanel} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Container'

export type IStackPanelProps = IComponentProps<BabylonStackPanel> & {
    name?: string 
}

export type IStackPanelParams = {

}

function StackPanelHOC(EL: React.FC) {
    return (props: IStackPanelParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StackPanelHOC(e));
}

function _(props: IStackPanelProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonStackPanel(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStackPanel = buildExtends<IStackPanelProps & IStackPanelParams>(_); 