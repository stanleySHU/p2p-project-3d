import { Action, SetParentAction as BabylonSetParentAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type ISetParentActionProps = IComponentProps<BabylonSetParentAction> & {
    triggerOptions: any, 
    target: any, 
    parent: any, 
    condition?: Condition
}

export type ISetParentActionParams = {

}

function SetParentActionHOC(EL: React.FC) {
    return (props: ISetParentActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SetParentActionHOC(e));
}

function _(props: ISetParentActionProps) {
    const { instance, triggerOptions, target, parent, condition } =  props;
    useEffect(() => {
        instance!.current = new BabylonSetParentAction(triggerOptions, target, parent, condition);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSetParentAction = buildExtends<ISetParentActionProps & ISetParentActionParams>(_);