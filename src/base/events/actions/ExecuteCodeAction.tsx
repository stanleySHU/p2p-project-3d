import { ExecuteCodeAction as BabylonExecuteCodeAction, Condition, ActionEvent } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type IExecuteCodeActionProps = {
    triggerOptions: any, 
    func: (evt: ActionEvent) => void, 
    condition?: Condition
}

export type IExecuteCodeActionParams = {

}

function ExecuteCodeActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IExecuteCodeActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ExecuteCodeActionHOC(e));
}

function _(props: IExecuteCodeActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, func, condition} =  props;
    useEffect(() => {
        let obj = new BabylonExecuteCodeAction(triggerOptions, func, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PExecuteCodeAction = buildExtends<IExecuteCodeActionProps & IExecuteCodeActionParams>(_);