import { DoNothingAction as BabylonDoNothingAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type IDoNothingActionProps = {
    triggerOptions?: any, 
    condition?: Condition
}

export type IDoNothingActionParams = {

}

function DoNothingActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IDoNothingActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DoNothingActionHOC(e));
}

function _(props: IDoNothingActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, condition } =  props;
    useEffect(() => {
        let obj = new BabylonDoNothingAction(triggerOptions, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PDoNothingAction = buildExtends<IDoNothingActionProps & IDoNothingActionParams>(_);