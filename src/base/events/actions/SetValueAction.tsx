import { Action, SetValueAction as BabylonSetValueAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type ISetValueActionProps = IComponentProps<BabylonSetValueAction> &  {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    value: any, 
    condition?: Condition
}

export type ISetValueActionParams = {

}

function SetValueActionHOC(EL: React.FC) {
    return (props: ISetValueActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SetValueActionHOC(e));
}

function _(props: ISetValueActionProps) {
    const { instance, triggerOptions, target, propertyPath, value, condition } =  props;
    useEffect(() => {
        instance!.current = new BabylonSetValueAction(triggerOptions, target, propertyPath, value, condition);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSetValueAction = buildExtends<ISetValueActionProps & ISetValueActionParams>(_);