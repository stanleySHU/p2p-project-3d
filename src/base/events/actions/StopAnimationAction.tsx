import { Action, StopAnimationAction as BabylonStopAnimationAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type IStopAnimationActionProps = IComponentProps &  {
    triggerOptions: any, 
    target: any, 
    condition?: Condition
}

export type IStopAnimationActionParams = {

}

function StopAnimationActionHOC(EL: React.FC) {
    return (props: IStopAnimationActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IStopAnimationActionProps) {
    const { init, triggerOptions, target, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStopAnimationAction(triggerOptions, target, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStopAnimationAction = getEL<IStopAnimationActionParams>(_, [
    StopAnimationActionHOC,
    ActionHOC,
    ComponentHOC
]);