import { ActionManager, StateCondition as BabylonStateCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Condition'

export type IStateConditionProps = {
    actionManager: ActionManager, 
    target: any, 
    value: string
}

export type IStateConditionParams = {

}

function StateConditionHOC<T>(EL: React.FC<T>) {
    return (props: T & IStateConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StateConditionHOC(e));
}

function _(props: IStateConditionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { actionManager, target, value } =  props;
    useEffect(() => {
        let obj = new BabylonStateCondition(actionManager, target, value );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PStateCondition = buildExtends<IStateConditionProps & IStateConditionParams>(_);