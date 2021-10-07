import { Action, IncrementValueAction as BabylonIncrementValueAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type IIncrementValueActionProps = {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    value: any,
    condition?: Condition
}

export type IIncrementValueActionParams = {

}

function IncrementValueActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IIncrementValueActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(IncrementValueActionHOC(e));
}

function _(props: IIncrementValueActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, target, propertyPath, value, condition } =  props;
    useEffect(() => {
        let obj = new BabylonIncrementValueAction(triggerOptions, target, propertyPath, value, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PIncrementValueAction = buildExtends<IIncrementValueActionProps & IIncrementValueActionParams>(_);