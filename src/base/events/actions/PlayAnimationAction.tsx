import { Action, PlayAnimationAction as BabylonPlayAnimationAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type IPlayAnimationActionProps = {
    triggerOptions: any, 
    target: any, 
    from: number, 
    to: number, 
    loop?: boolean, 
    condition?: Condition
}

export type IPlayAnimationActionParams = {

}

function PlayAnimationActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IPlayAnimationActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlayAnimationActionHOC(e));
}

function _(props: IPlayAnimationActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, target, from, to, loop, condition } =  props;
    useEffect(() => {
        let obj = new BabylonPlayAnimationAction(triggerOptions, target, from, to, loop, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPlayAnimationAction = buildExtends<IPlayAnimationActionProps & IPlayAnimationActionParams>(_);