import { DisplayGrid as BabylonDisplayGrid} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IDisplayGridProps = IComponentProps & {
    name?: string 
}

export type IDisplayGridParams = {

}

function DisplayGridHOC(EL: React.FC) {
    return (props: IDisplayGridParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IDisplayGridProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonDisplayGrid(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDisplayGrid = getEL<IDisplayGridParams>(_, [
    DisplayGridHOC,
    ControlHOC,
    ComponentHOC
])