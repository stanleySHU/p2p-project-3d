import { ActionManager, Condition as BabylonCondition, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IConditionProps = {
    actionManager: ActionManager
}

export type IConditionParams = {

}

function ConditionHOC<T>(EL: React.FC<T>) {
    return (props: T & IConditionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ConditionHOC(e));
}

function _(props: IConditionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { actionManager } =  props;
    useEffect(() => {
        let obj = new BabylonCondition(actionManager);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PCondition = buildExtends<IConditionProps & IConditionParams>(_);