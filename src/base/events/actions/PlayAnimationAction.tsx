import { Action, PlayAnimationAction as BabylonPlayAnimationAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type IPlayAnimationActionProps = IComponentProps& {
    triggerOptions: any, 
    target: any, 
    from: number, 
    to: number, 
    loop?: boolean, 
    condition?: Condition
}

export type IPlayAnimationActionParams = {

}

function PlayAnimationActionHOC(EL: React.FC) {
    return (props: IPlayAnimationActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IPlayAnimationActionProps) {
    const { init, triggerOptions, target, from, to, loop, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPlayAnimationAction(triggerOptions, target, from, to, loop, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPlayAnimationAction = getEL<IPlayAnimationActionParams>(_, [
    PlayAnimationActionHOC,
    ActionHOC,
    ComponentHOC
]);