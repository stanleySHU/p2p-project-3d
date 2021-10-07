import { Node as BabylonNode, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useReducer } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from '../Component'
import { newChildren } from '../ComponentRedux';
import { reducer, initialState } from './NodeRedux';

export type INodeProps = {
    name: string, 
    scene?: Nullable<BabylonScene>
}

export type INodeParams = {

}

function NodeHOC<T>(EL: React.FC<T>) {
    return (props: T & INodeParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(NodeHOC(e));
}

function _(props: INodeProps) {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { scene, name } = props;
    useEffect(() => {
        let obj = new BabylonNode(name, scene);
        dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PNode = buildExtends<INodeProps & INodeParams>(_); 