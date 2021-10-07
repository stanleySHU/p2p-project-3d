import { Action as BabylonAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IActionProps = {
    triggerOptions: any, 
    condition?: Condition
}

export type IActionParams = {

}

function ActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ActionHOC(e));
}

function _(props: IActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, condition } =  props;
    useEffect(() => {
        let obj = new BabylonAction(triggerOptions, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PAction = buildExtends<IActionProps & IActionParams>(_);