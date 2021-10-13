import { ExecuteCodeAction as BabylonExecuteCodeAction, Condition, ActionEvent } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type IExecuteCodeActionProps = IComponentProps & {
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

function _(props: IExecuteCodeActionProps) {
    const { init, triggerOptions, func, condition} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonExecuteCodeAction(triggerOptions, func, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PExecuteCodeAction = getEL<IExecuteCodeActionParams>(_, [
    ExecuteCodeActionHOC,
    ActionHOC,
    ComponentHOC
])