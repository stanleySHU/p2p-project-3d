import { Action, SwitchBooleanAction as BabylonSwitchBooleanAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
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
    const { init, triggerOptions, target, propertyPath, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonSwitchBooleanAction(triggerOptions, target, propertyPath, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSwitchBooleanAction = buildExtends<ISwitchBooleanActionProps & ISwitchBooleanActionParams>(_);