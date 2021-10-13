import { Action, SetParentAction as BabylonSetParentAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type ISetParentActionProps = IComponentProps & {
    triggerOptions: any, 
    target: any, 
    parent: any, 
    condition?: Condition
}

export type ISetParentActionParams = {

}

function SetParentActionHOC(EL: React.FC) {
    return (props: ISetParentActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ISetParentActionProps) {
    const { init, triggerOptions, target, parent, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonSetParentAction(triggerOptions, target, parent, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSetParentAction = getEL<ISetParentActionParams>(_, [
    SetParentActionHOC,
    ActionHOC,
    ComponentHOC
]);