import { ActionManager, PredicateCondition as BabylonPredicateCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Condition'

export type IPredicateConditionProps = IComponentProps<BabylonPredicateCondition> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PredicateConditionHOC(e));
}

function _(props: IPredicateConditionProps) {
    const { instance, actionManager, predicate } =  props;
    useEffect(() => {
        instance!.current = new BabylonPredicateCondition(actionManager, predicate);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPredicateCondition = buildExtends<IPredicateConditionProps & IPredicateConditionParams>(_);