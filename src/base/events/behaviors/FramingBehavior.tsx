import { FramingBehavior as BabylonFramingBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IFramingBehaviorProps = {}

export type IFramingBehaviorParams = {

}

function FramingBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IFramingBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FramingBehaviorHOC(e));
}

function _(props: IFramingBehaviorProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(() => {
        let obj = new BabylonFramingBehavior();
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PFramingBehavior = buildExtends<IFramingBehaviorProps & IFramingBehaviorParams>(_);