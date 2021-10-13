import { Line as BabylonLine} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type ILineProps = IComponentProps & {
    name?: string 
}

export type ILineParams = {

}

function LineHOC(EL: React.FC) {
    return (props: ILineParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ILineProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonLine(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLine = getEL<ILineParams>(_, [
    LineHOC,
    ControlHOC,
    ComponentHOC
])