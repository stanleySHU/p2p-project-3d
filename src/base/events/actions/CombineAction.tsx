import { Action, CombineAction as BabylonCombineAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type ICombineActionProps = IComponentProps & {
    triggerOptions: any, 
    children: Action[], 
    condition?: Condition, 
    enableChildrenConditions?: boolean
}

export type ICombineActionParams = {

}

function CombineActionHOC(EL: React.FC) {
    return (props: ICombineActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ICombineActionProps) {
    const { init, triggerOptions, children, condition, enableChildrenConditions } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonCombineAction(triggerOptions, children, condition, enableChildrenConditions);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCombineAction = getEL<ICombineActionParams>(_, [
    CombineActionHOC,
    ActionHOC,
    ComponentHOC
]);