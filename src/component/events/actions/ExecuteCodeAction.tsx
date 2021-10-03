import { ActionEvent, ExecuteCodeAction as BabylonExecuteCodeAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type IExecuteCodeActionInitial<T> = IActionInitial<T> & {
    func: (evt: ActionEvent) => void,
};
export type IExecuteCodeActionProps = IExecuteCodeActionInitial<BabylonExecuteCodeAction>;

function ExecuteCodeActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IExecuteCodeActionProps) => {
        const { instance, name, triggerOptions, func, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonExecuteCodeAction(triggerOptions, func, condition);
                console.log(`ExecuteCodeAction ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(ExecuteCodeActionHOC(e));
}

export const P2PExecuteCodeAction = buildExtends<IExecuteCodeActionProps>(ChildHOC(null));

export type IExecuteCodeActionOptions = {};
