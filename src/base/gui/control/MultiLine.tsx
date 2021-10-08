import { MultiLine as BabylonMultiLine} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Control'

export type IMultiLineProps = IComponentProps<BabylonMultiLine> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiLineHOC(e));
}

function _(props: IMultiLineProps) {
    const { instance, name } = props;
    useEffect(() => {
        instance!.current = new BabylonMultiLine(name);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiLine = buildExtends<IMultiLineProps & IMultiLineParams>(_); 