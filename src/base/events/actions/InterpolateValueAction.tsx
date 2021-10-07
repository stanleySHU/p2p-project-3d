import { Action, InterpolateValueAction as BabylonInterpolateValueAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type IInterpolateValueActionProps = {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    value: any, 
    duration?: number, 
    condition?: Condition, 
    stopOtherAnimations?: boolean, 
    onInterpolationDone?: () => void
}

export type IInterpolateValueActionParams = {

}

function InterpolateValueActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IInterpolateValueActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InterpolateValueActionHOC(e));
}

function _(props: IInterpolateValueActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone } =  props;
    useEffect(() => {
        let obj = new BabylonInterpolateValueAction(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PInterpolateValueAction = buildExtends<IInterpolateValueActionProps & IInterpolateValueActionParams>(_);