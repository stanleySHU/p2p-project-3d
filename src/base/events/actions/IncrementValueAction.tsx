import { Action, IncrementValueAction as BabylonIncrementValueAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type IIncrementValueActionProps = IComponentProps<BabylonIncrementValueAction> & {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    value: any,
    condition?: Condition
}

export type IIncrementValueActionParams = {

}

function IncrementValueActionHOC(EL: React.FC) {
    return (props: IIncrementValueActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(IncrementValueActionHOC(e));
}

function _(props: IIncrementValueActionProps) {
    const { instance, triggerOptions, target, propertyPath, value, condition } =  props;
    useEffect(() => {
        instance!.current = new BabylonIncrementValueAction(triggerOptions, target, propertyPath, value, condition);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PIncrementValueAction = buildExtends<IIncrementValueActionProps & IIncrementValueActionParams>(_);