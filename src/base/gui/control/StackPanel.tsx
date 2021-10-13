import { StackPanel as BabylonStackPanel} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC, IContainerParams } from './Container'
import { ControlHOC } from './Control';

export type IStackPanelProps = IComponentProps & {
    name?: string 
}

export type IStackPanelParams = {

}

export function StackPanelHOC(EL: React.FC) {
    return (props: IStackPanelParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IStackPanelProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonStackPanel(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStackPanel = getEL<IStackPanelParams>(_, [
    StackPanelHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])