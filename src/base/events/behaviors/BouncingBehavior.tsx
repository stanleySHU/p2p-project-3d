import { BouncingBehavior as BabylonBouncingBehavior } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IBouncingBehaviorProps = {}

export type IBouncingBehaviorParams = {

}

function BouncingBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IBouncingBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BouncingBehaviorHOC(e));
}

function _(props: IBouncingBehaviorProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(() => {
        let obj = new BabylonBouncingBehavior();
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PBouncingBehavior = buildExtends<IBouncingBehaviorProps & IBouncingBehaviorParams>(_);