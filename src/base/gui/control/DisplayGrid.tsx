import { DisplayGrid as BabylonDisplayGrid} from '@babylonjs/gui';
import React, { useEffect, useReducer } from 'react';
import { buildExtends as _buildExtends } from './Control'

export type IDisplayGridProps = {
    name?: string | undefined
}

export type IDisplayGridParams = {

}

function DisplayGridHOC<T>(EL: React.FC<T>) {
    return (props: T & IDisplayGridParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DisplayGridHOC(e));
}

function _(props: IDisplayGridProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name } = props;
    useEffect(() => {
        let obj = new BabylonDisplayGrid(name);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PDisplayGrid = buildExtends<IDisplayGridProps & IDisplayGridParams>(_); 