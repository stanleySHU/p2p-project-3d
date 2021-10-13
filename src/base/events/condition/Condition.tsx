import { ActionManager, Condition as BabylonCondition, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IConditionProps = IComponentProps & {
    actionManager: ActionManager
}

export type IConditionParams = {

}

export function ConditionHOC(EL: React.FC) {
    return (props: IConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IConditionProps) {
    const { init, actionManager } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonCondition(actionManager);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCondition = getEL<IConditionParams>(_, [
    ConditionHOC,
    ComponentHOC
])