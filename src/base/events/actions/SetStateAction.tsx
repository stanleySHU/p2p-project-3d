import { Action, SetStateAction as BabylonSetStateAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type ISetStateActionProps = IComponentProps & {
    triggerOptions: any, 
    target: any, 
    value: string, 
    condition?: Condition
}

export type ISetStateActionParams = {

}

function SetStateActionHOC(EL: React.FC) {
    return (props: ISetStateActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ISetStateActionProps) {
    const { init, triggerOptions, target, value, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonSetStateAction(triggerOptions, target, value, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSetStateAction = getEL<ISetStateActionParams>(_, [
    SetStateActionHOC,
    ActionHOC,
    ComponentHOC
]);