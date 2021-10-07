import { Action, CombineAction as BabylonCombineAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type ICombineActionProps = {
    triggerOptions: any, 
    children: Action[], 
    condition?: Condition, 
    enableChildrenConditions?: boolean
}

export type ICombineActionParams = {

}

function CombineActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ICombineActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CombineActionHOC(e));
}

function _(props: ICombineActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, children, condition, enableChildrenConditions } =  props;
    useEffect(() => {
        let obj = new BabylonCombineAction(triggerOptions, children, condition, enableChildrenConditions);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PCombineAction = buildExtends<ICombineActionProps & ICombineActionParams>(_);