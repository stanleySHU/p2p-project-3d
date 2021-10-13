import { Grid as BabylonGrid} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren, getEL, ComponentHOC} from '../../Component';
import { IContainerParams } from './Container'
import { ContainerHOC } from './Container'
import { ControlHOC } from './Control';

export type IGridProps = IComponentProps & {
    name?: string 
}

export type IGridParams = {

}

function GridHOC(EL: React.FC) {
    return (props: IGridParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IGridProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonGrid(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PGrid = getEL<IGridParams>(_, [
    GridHOC,
    ContainerHOC,
    ControlHOC,
    ComponentHOC
])