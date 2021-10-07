import { ActionManager, PredicateCondition as BabylonPredicateCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Condition'

export type IPredicateConditionProps = {
    actionManager: ActionManager, 
    predicate: () => boolean
}

export type IPredicateConditionParams = {

}

function PredicateConditionHOC<T>(EL: React.FC<T>) {
    return (props: T & IPredicateConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PredicateConditionHOC(e));
}

function _(props: IPredicateConditionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { actionManager, predicate } =  props;
    useEffect(() => {
        let obj = new BabylonPredicateCondition(actionManager, predicate);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPredicateCondition = buildExtends<IPredicateConditionProps & IPredicateConditionParams>(_);