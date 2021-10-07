import { Action, SetStateAction as BabylonSetStateAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type ISetStateActionProps = {
    triggerOptions: any, 
    target: any, 
    value: string, 
    condition?: Condition
}

export type ISetStateActionParams = {

}

function SetStateActionHOC<T>(EL: React.FC<T>) {
    return (props: T & ISetStateActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SetStateActionHOC(e));
}

function _(props: ISetStateActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, target, value, condition } =  props;
    useEffect(() => {
        let obj = new BabylonSetStateAction(triggerOptions, target, value, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PSetStateAction = buildExtends<ISetStateActionProps & ISetStateActionParams>(_);