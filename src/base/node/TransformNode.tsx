import { TransformNode as BabylonTransformNode, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useReducer } from 'react';
import { Nullable } from '../../utils/customType';
import { newChildren } from '../ComponentRedux';
import { buildExtends as _buildExtends } from './Node';
import { reducer, initialState } from './NodeRedux';

export type ITransformNodeProps = {
    name: string, 
    scene?: Nullable<BabylonScene>, 
    isPure?: boolean
}

export type ITransformNodeParams = {

}

function TransformNodeHOC<T>(EL: React.FC<T>) {
    return (props: T & ITransformNodeParams) => {
        useEffect(() => {
            
        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TransformNodeHOC(e))
}

function _(props: ITransformNodeProps) {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { scene, name, isPure } = props;
    useEffect(() => {
        let obj = new BabylonTransformNode(name, scene, isPure);
        dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PTransformNode = buildExtends<ITransformNodeProps & ITransformNodeParams>(_);