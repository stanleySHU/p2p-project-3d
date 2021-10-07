import { Grid as BabylonGrid} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Container'

export type IGridProps = {
    name?: string | undefined
}

export type IGridParams = {

}

function GridHOC<T>(EL: React.FC<T>) {
    return (props: T & IGridParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(GridHOC(e));
}

function _(props: IGridProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonGrid(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PGrid = buildExtends<IGridProps & IGridParams>(_); 