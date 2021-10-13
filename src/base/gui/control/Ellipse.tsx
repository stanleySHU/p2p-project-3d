import { Ellipse as BabylonEllipse} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ContainerHOC } from './Container';
import { ControlHOC } from './Control';

export type IEllipseProps = IComponentProps & {
    name?: string 
}

export type IEllipseParams = {

}

function EllipseHOC(EL: React.FC) {
    return (props: IEllipseParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IEllipseProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonEllipse(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PEllipse = getEL<IEllipseParams>(_, [
    EllipseHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])