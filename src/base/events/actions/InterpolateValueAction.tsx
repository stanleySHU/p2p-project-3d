import { Action, InterpolateValueAction as BabylonInterpolateValueAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type IInterpolateValueActionProps = IComponentProps<BabylonInterpolateValueAction> & {
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

function InterpolateValueActionHOC(EL: React.FC) {
    return (props: IInterpolateValueActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(InterpolateValueActionHOC(e));
}

function _(props: IInterpolateValueActionProps) {
    const { instance, triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone } =  props;
    useEffect(() => {
        instance!.current = new BabylonInterpolateValueAction(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PInterpolateValueAction = buildExtends<IInterpolateValueActionProps & IInterpolateValueActionParams>(_);