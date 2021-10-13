import { Action, SwitchBooleanAction as BabylonSwitchBooleanAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type ISwitchBooleanActionProps = IComponentProps & {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    condition?: Condition
}

export type ISwitchBooleanActionParams = {

}

function SwitchBooleanActionHOC(EL: React.FC) {
    return (props: ISwitchBooleanActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ISwitchBooleanActionProps) {
    const { init, triggerOptions, target, propertyPath, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonSwitchBooleanAction(triggerOptions, target, propertyPath, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSwitchBooleanAction = getEL<ISwitchBooleanActionParams>(_, [
    SwitchBooleanActionHOC,
    ActionHOC,
    ComponentHOC
]);