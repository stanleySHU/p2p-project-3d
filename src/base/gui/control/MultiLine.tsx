import { MultiLine as BabylonMultiLine} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ControlHOC, IControlParams } from './Control'

export type IMultiLineProps = IComponentProps & {
    name?: string
}

export type IMultiLineParams = {

}

function MultiLineHOC(EL: React.FC) {
    return (props: IMultiLineParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IMultiLineProps) {
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonMultiLine(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiLine = getEL<IMultiLineParams>(_, [
    MultiLineHOC,
    ControlHOC,
    ComponentHOC
])