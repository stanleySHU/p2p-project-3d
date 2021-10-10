import { ActionManager, ValueCondition as BabylonValueCondition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Condition'

export type IValueConditionProps = IComponentProps<BabylonValueCondition> & {
    actionManager: ActionManager, 
    target: any, 
    propertyPath: string, 
    value: any, 
    operator?: number
}

export type IValueConditionParams = {

}

function ValueConditionHOC(EL: React.FC) {
    return (props: IValueConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ValueConditionHOC(e));
}

function _(props: IValueConditionProps) {
    const { init, actionManager, target, propertyPath, value, operator } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonValueCondition(actionManager, target, propertyPath, value, operator);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PValueCondition = buildExtends<IValueConditionProps & IValueConditionParams>(_);