import { Action, SwitchBooleanAction as BabylonSwitchBooleanAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type ISwitchBooleanActionProps = {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    condition?: Condition
}

export type ISwitchBooleanActionParams = {

}

function SwitchBooleanActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ISwitchBooleanActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SwitchBooleanActionHOC(e));
}

function _(props: ISwitchBooleanActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, target, propertyPath, condition } =  props;
    useEffect(() => {
        let obj = new BabylonSwitchBooleanAction(triggerOptions, target, propertyPath, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSwitchBooleanAction = buildExtends<ISwitchBooleanActionProps & ISwitchBooleanActionParams>(_);