import { Action, StopSoundAction as BabylonStopSoundAction, Condition, Sound } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type IStopSoundActionProps = {
    triggerOptions: any, 
    sound: Sound, 
    condition?: Condition
}

export type IStopSoundActionParams = {

}

function StopSoundActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IStopSoundActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StopSoundActionHOC(e));
}

function _(props: IStopSoundActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, sound, condition } =  props;
    useEffect(() => {
        let obj = new BabylonStopSoundAction(triggerOptions, sound, condition );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PStopSoundAction = buildExtends<IStopSoundActionProps & IStopSoundActionParams>(_);