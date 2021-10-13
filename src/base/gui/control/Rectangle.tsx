import { Rectangle as BabylonRectangle} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC, IContainerParams } from './Container'
import { ControlHOC } from './Control';

export type IRectangleProps = IComponentProps & {
    name?: string
}

export type IRectangleParams = {

}

export function RectangleHOC(EL: React.FC) {
    return (props: IRectangleParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IRectangleProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonRectangle(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRectangle = getEL<IRectangleParams>(_, [
    RectangleHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])