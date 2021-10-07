import { FadeInOutBehavior as BabylonFadeInOutBehavior } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IFadeInOutBehaviorProps = {}
export type IFadeInOutBehaviorParams = {

}

function FadeInOutBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IFadeInOutBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(FadeInOutBehaviorHOC(e));
}

function _(props: IFadeInOutBehaviorProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(() => {
        let obj = new BabylonFadeInOutBehavior();
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PFadeInOutBehavior = buildExtends<IFadeInOutBehaviorProps & IFadeInOutBehaviorParams>(_);