import { DoNothingAction as BabylonDoNothingAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type IDoNothingActionProps = IComponentProps & {
    triggerOptions?: any, 
    condition?: Condition
}

export type IDoNothingActionParams = {

}

function DoNothingActionHOC(EL: React.FC) {
    return (props: IDoNothingActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IDoNothingActionProps) {
    const { init, triggerOptions, condition } =  props;
    useLayoutEffect(() => {
        let obj  = new BabylonDoNothingAction(triggerOptions, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDoNothingAction = getEL<IDoNothingActionParams>(_, [
    DoNothingActionHOC,
    ActionHOC,
    ComponentHOC
]);