import { Button as BabylonButton} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC, IContainerParams } from './Container';
import { ControlHOC, IControlParams } from './Control';
import { IRectangleParams, RectangleHOC } from './Rectangle'

export type IButtonProps = IComponentProps & {
    name?: string 
}

export type IButtonParams = {

}

export function ButtonHOC(EL: React.FC) {
    return (props: IButtonParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IButtonProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonButton(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PButton = getEL<IControlParams & IContainerParams & IRectangleParams & IButtonParams & IButtonProps>(_, [
    ButtonHOC,
    RectangleHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])