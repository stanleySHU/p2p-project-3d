import { Action, SetParentAction as BabylonSetParentAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type ISetParentActionProps = {
    triggerOptions: any, 
    target: any, 
    parent: any, 
    condition?: Condition
}

export type ISetParentActionParams = {

}

function SetParentActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ISetParentActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SetParentActionHOC(e));
}

function _(props: ISetParentActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, target, parent, condition } =  props;
    useEffect(() => {
        let obj = new BabylonSetParentAction(triggerOptions, target, parent, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSetParentAction = buildExtends<ISetParentActionProps & ISetParentActionParams>(_);