import { Action, SetValueAction as BabylonSetValueAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type ISetValueActionProps = {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    value: any, 
    condition?: Condition
}

export type ISetValueActionParams = {

}

function SetValueActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ISetValueActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SetValueActionHOC(e));
}

function _(props: ISetValueActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, target, propertyPath, value, condition } =  props;
    useEffect(() => {
        let obj = new BabylonSetValueAction(triggerOptions, target, propertyPath, value, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSetValueAction = buildExtends<ISetValueActionProps & ISetValueActionParams>(_);