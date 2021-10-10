import { Action, StopAnimationAction as BabylonStopAnimationAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type IStopAnimationActionProps = IComponentProps<BabylonStopAnimationAction> &  {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StopAnimationActionHOC(e));
}

function _(props: IStopAnimationActionProps) {
    const { init, triggerOptions, target, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStopAnimationAction(triggerOptions, target, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStopAnimationAction = buildExtends<IStopAnimationActionProps & IStopAnimationActionParams>(_);