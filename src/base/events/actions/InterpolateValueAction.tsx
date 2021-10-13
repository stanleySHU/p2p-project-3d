import { Action, InterpolateValueAction as BabylonInterpolateValueAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type IInterpolateValueActionProps = IComponentProps & {
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

function _(props: IInterpolateValueActionProps) {
    const { init, triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonInterpolateValueAction(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PInterpolateValueAction = getEL<IInterpolateValueActionParams>(_, [
    InterpolateValueActionHOC,
    ActionHOC,
    ComponentHOC
]);