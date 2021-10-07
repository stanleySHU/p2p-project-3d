import { SixDofDragBehavior as BabylonSixDofDragBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type ISixDofDragBehaviorProps = {}

export type ISixDofDragBehaviorParams = {

}

function SixDofDragBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & ISixDofDragBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SixDofDragBehaviorHOC(e));
}

function _(props: ISixDofDragBehaviorProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(() => {
        let obj = new BabylonSixDofDragBehavior();
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSixDofDragBehavior = buildExtends<ISixDofDragBehaviorProps & ISixDofDragBehaviorParams>(_);