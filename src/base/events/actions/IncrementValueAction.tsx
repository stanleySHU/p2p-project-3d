import { Action, IncrementValueAction as BabylonIncrementValueAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type IIncrementValueActionProps = IComponentProps & {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    value: any,
    condition?: Condition
}

export type IIncrementValueActionParams = {

}

function IncrementValueActionHOC(EL: React.FC) {
    return (props: IIncrementValueActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IIncrementValueActionProps) {
    const { init, triggerOptions, target, propertyPath, value, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonIncrementValueAction(triggerOptions, target, propertyPath, value, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PIncrementValueAction = getEL<IIncrementValueActionParams>(_, [
    IncrementValueActionHOC,
    ActionHOC,
    ComponentHOC
])