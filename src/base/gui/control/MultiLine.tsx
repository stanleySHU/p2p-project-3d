import { MultiLine as BabylonMultiLine} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type IMultiLineProps = {
    name?: string | undefined
}

export type IMultiLineParams = {

}

function MultiLineHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiLineParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiLineHOC(e));
}

function _(props: IMultiLineProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonMultiLine(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PMultiLine = buildExtends<IMultiLineProps & IMultiLineParams>(_); 