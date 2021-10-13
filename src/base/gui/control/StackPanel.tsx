import { StackPanel as BabylonStackPanel} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IContainerParams } from './Container'

export type IStackPanelProps = IComponentProps<BabylonStackPanel> & {
    name?: string 
}

export type IStackPanelParams<T> = IContainerParams<T> & {

}

function StackPanelHOC(EL: React.FC) {
    return (props: IStackPanelParams<BabylonStackPanel>) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StackPanelHOC(e));
}

function _(props: IStackPanelProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonStackPanel(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStackPanel = buildExtends<IStackPanelProps & IStackPanelParams<BabylonStackPanel>>(_); 