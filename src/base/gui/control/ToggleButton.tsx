import { ToggleButton as BabylonToggleButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC } from './Container';
import { ControlHOC } from './Control';
import { IRectangleParams, RectangleHOC } from './Rectangle'

export type IToggleButtonProps = IComponentProps & {
    name?: string 
}

export type IToggleButtonParams = {

}

function ToggleButtonHOC(EL: React.FC) {
    return (props: IToggleButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IToggleButtonProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonToggleButton(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PToggleButton = getEL<IToggleButtonParams>(_, [
    ToggleButtonHOC,
    RectangleHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])