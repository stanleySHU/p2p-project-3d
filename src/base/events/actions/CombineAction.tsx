import { Action, CombineAction as BabylonCombineAction, Condition } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type ICombineActionProps = IComponentProps<BabylonCombineAction> & {
    triggerOptions: any, 
    children: Action[], 
    condition?: Condition, 
    enableChildrenConditions?: boolean
}

export type ICombineActionParams = {

}

function CombineActionHOC(EL: React.FC) {
    return (props: ICombineActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CombineActionHOC(e));
}

function _(props: ICombineActionProps) {
    const { init, triggerOptions, children, condition, enableChildrenConditions } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonCombineAction(triggerOptions, children, condition, enableChildrenConditions);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCombineAction = buildExtends<ICombineActionProps & ICombineActionParams>(_);