import { ActionManager, StateCondition as BabylonStateCondition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ConditionHOC } from './Condition';

export type IStateConditionProps = IComponentProps & {
    actionManager: ActionManager, 
    target: any, 
    value: string
}

export type IStateConditionParams = {

}

function StateConditionHOC(EL: React.FC) {
    return (props: IStateConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IStateConditionProps) {
    const { init, actionManager, target, value } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStateCondition(actionManager, target, value );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStateCondition = getEL<IStateConditionParams>(_, [
    StateConditionHOC,
    ConditionHOC,
    ComponentHOC
]);