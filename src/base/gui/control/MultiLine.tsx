import { MultiLine as BabylonMultiLine} from '@babylonjs/gui';
import React, { useEffect, useLayoutEffect, useReducer } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends, IControlParams } from './Control'

export type IMultiLineProps = IComponentProps<BabylonMultiLine> & {
    name?: string
}

export type IMultiLineParams = IControlParams & {

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
    const { init, name } = props;
    useLayoutEffect(() => {
        let obj = new BabylonMultiLine(name);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiLine = buildExtends<IMultiLineProps & IMultiLineParams>(_); 