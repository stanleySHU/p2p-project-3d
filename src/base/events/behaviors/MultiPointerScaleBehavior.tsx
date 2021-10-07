import { MultiPointerScaleBehavior as BabylonMultiPointerScaleBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IMultiPointerScaleBehaviorProps = {}

export type IMultiPointerScaleBehaviorParams = {

}

function MultiPointerScaleBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiPointerScaleBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiPointerScaleBehaviorHOC(e));
}

function _(props: IMultiPointerScaleBehaviorProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(() => {
        let obj = new BabylonMultiPointerScaleBehavior();
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PMultiPointerScaleBehavior = buildExtends<IMultiPointerScaleBehaviorProps & IMultiPointerScaleBehaviorParams>(_);