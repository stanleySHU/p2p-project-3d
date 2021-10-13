import { VirtualKeyboard as BabylonVirtualKeyboard} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC } from './Container';
import { ControlHOC } from './Control';
import { IStackPanelParams, StackPanelHOC } from './StackPanel'

export type IVirtualKeyboardProps = IComponentProps & {
    name?: string 
}

export type IVirtualKeyboardParams = {

}

function VirtualKeyboardHOC(EL: React.FC) {
    return (props: IVirtualKeyboardParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IVirtualKeyboardProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonVirtualKeyboard(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVirtualKeyboard = getEL<IVirtualKeyboardParams>(_, [
    VirtualKeyboardHOC,
    StackPanelHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])