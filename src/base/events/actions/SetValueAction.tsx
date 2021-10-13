import { Action, SetValueAction as BabylonSetValueAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type ISetValueActionProps = IComponentProps &  {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    value: any, 
    condition?: Condition
}

export type ISetValueActionParams = {

}

function SetValueActionHOC(EL: React.FC) {
    return (props: ISetValueActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ISetValueActionProps) {
    const { init, triggerOptions, target, propertyPath, value, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonSetValueAction(triggerOptions, target, propertyPath, value, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSetValueAction = getEL<ISetValueActionParams>(_, [
    SetValueActionHOC,
    ActionHOC,
    ComponentHOC
]);