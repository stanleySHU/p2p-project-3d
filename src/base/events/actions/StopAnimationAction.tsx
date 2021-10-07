import { Action, StopAnimationAction as BabylonStopAnimationAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type IStopAnimationActionProps = {
    triggerOptions: any, 
    target: any, 
    condition?: Condition
}

export type IStopAnimationActionParams = {

}

function StopAnimationActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IStopAnimationActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StopAnimationActionHOC(e));
}

function _(props: IStopAnimationActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, target, condition } =  props;
    useEffect(() => {
        let obj = new BabylonStopAnimationAction(triggerOptions, target, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PStopAnimationAction = buildExtends<IStopAnimationActionProps & IStopAnimationActionParams>(_);