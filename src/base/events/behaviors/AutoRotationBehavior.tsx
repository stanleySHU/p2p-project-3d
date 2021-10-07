import { AutoRotationBehavior as BabylonAutoRotationBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IAutoRotationBehaviorProps = {}

export type IAutoRotationBehaviorParams = {

}

function AutoRotationBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IAutoRotationBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AutoRotationBehaviorHOC(e));
}

function _(props: IAutoRotationBehaviorProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(() => {
        let obj = new BabylonAutoRotationBehavior();
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PAutoRotationBehavior = buildExtends<IAutoRotationBehaviorProps & IAutoRotationBehaviorParams>(_);