import { Action, SwitchBooleanAction as BabylonSwitchBooleanAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type ISwitchBooleanActionProps = IComponentProps<BabylonSwitchBooleanAction> & {
    triggerOptions: any, 
    target: any, 
    propertyPath: string, 
    condition?: Condition
}

export type ISwitchBooleanActionParams = {

}

function SwitchBooleanActionHOC(EL: React.FC) {
    return (props: ISwitchBooleanActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SwitchBooleanActionHOC(e));
}

function _(props: ISwitchBooleanActionProps) {
    const { instance, triggerOptions, target, propertyPath, condition } =  props;
    useEffect(() => {
        instance!.current = new BabylonSwitchBooleanAction(triggerOptions, target, propertyPath, condition);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSwitchBooleanAction = buildExtends<ISwitchBooleanActionProps & ISwitchBooleanActionParams>(_);