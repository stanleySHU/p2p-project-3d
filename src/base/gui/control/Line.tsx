import { Line as BabylonLine} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type ILineProps = {
    name?: string | undefined
}

export type ILineParams = {

}

function LineHOC<T>(EL: React.FC<T>) {
    return (props: T & ILineParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LineHOC(e));
}

function _(props: ILineProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonLine(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PLine = buildExtends<ILineProps & ILineParams>(_); 