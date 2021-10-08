import { ActionManager, StateCondition as BabylonStateCondition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Condition'

export type IStateConditionProps = IComponentProps<BabylonStateCondition> & {
    actionManager: ActionManager, 
    target: any, 
    value: string
}

export type IStateConditionParams = {

}

function StateConditionHOC(EL: React.FC) {
    return (props: IStateConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StateConditionHOC(e));
}

function _(props: IStateConditionProps) {
    const { instance, actionManager, target, value } =  props;
    useEffect(() => {
        instance!.current = new BabylonStateCondition(actionManager, target, value );
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStateCondition = buildExtends<IStateConditionProps & IStateConditionParams>(_);