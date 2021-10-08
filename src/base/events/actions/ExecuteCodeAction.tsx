import { ExecuteCodeAction as BabylonExecuteCodeAction, Condition, ActionEvent } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type IExecuteCodeActionProps = IComponentProps<BabylonExecuteCodeAction> & {
    triggerOptions: any, 
    func: (evt: ActionEvent) => void, 
    condition?: Condition
}

export type IExecuteCodeActionParams = {

}

function ExecuteCodeActionHOC(EL: React.FC) {
    return (props: IExecuteCodeActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ExecuteCodeActionHOC(e));
}

function _(props: IExecuteCodeActionProps) {
    const { instance, triggerOptions, func, condition} =  props;
    useEffect(() => {
        instance!.current = new BabylonExecuteCodeAction(triggerOptions, func, condition);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PExecuteCodeAction = buildExtends<IExecuteCodeActionProps & IExecuteCodeActionParams>(_);