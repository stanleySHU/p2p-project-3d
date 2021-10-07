import { ActionManager, ValueCondition as BabylonValueCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Condition'

export type IValueConditionProps = {
    actionManager: ActionManager, 
    target: any, 
    propertyPath: string, 
    value: any, 
    operator?: number
}

export type IValueConditionParams = {

}

function ValueConditionHOC<T>(EL: React.FC<T>) {
    return (props: T & IValueConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ValueConditionHOC(e));
}

function _(props: IValueConditionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { actionManager, target, propertyPath, value, operator } =  props;
    useEffect(() => {
        let obj = new BabylonValueCondition(actionManager, target, propertyPath, value, operator);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PValueCondition = buildExtends<IValueConditionProps & IValueConditionParams>(_);