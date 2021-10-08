import { ActionManager, Condition as BabylonCondition, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IConditionProps = IComponentProps<BabylonCondition> & {
    actionManager: ActionManager
}

export type IConditionParams = {

}

function ConditionHOC(EL: React.FC) {
    return (props: IConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ConditionHOC(e));
}

function _(props: IConditionProps) {
    const { instance, actionManager } =  props;
    useEffect(() => {
        instance!.current = new BabylonCondition(actionManager);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCondition = buildExtends<IConditionProps & IConditionParams>(_);