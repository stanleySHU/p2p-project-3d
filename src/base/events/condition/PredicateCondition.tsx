import { ActionManager, PredicateCondition as BabylonPredicateCondition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ConditionHOC } from './Condition';

export type IPredicateConditionProps = IComponentProps & {
    actionManager: ActionManager, 
    predicate: () => boolean
}

export type IPredicateConditionParams = {

}

function PredicateConditionHOC(EL: React.FC) {
    return (props: IPredicateConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IPredicateConditionProps) {
    const { init, actionManager, predicate } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPredicateCondition(actionManager, predicate);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPredicateCondition = getEL<IPredicateConditionParams>(_, [
    PredicateConditionHOC,
    ConditionHOC,
    ComponentHOC
]);