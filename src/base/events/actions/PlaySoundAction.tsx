import { Action, PlaySoundAction as BabylonPlaySoundAction, Condition, Sound } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from './Action'

export type IPlaySoundActionProps = {
    triggerOptions: any, 
    sound: Sound, 
    condition?: Condition
}

export type IPlaySoundActionParams = {

}

function PlaySoundActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IPlaySoundActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlaySoundActionHOC(e));
}

function _(props: IPlaySoundActionProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { triggerOptions, sound, condition } =  props;
    useEffect(() => {
        let obj = new BabylonPlaySoundAction(triggerOptions, sound, condition);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPlaySoundAction = buildExtends<IPlaySoundActionProps & IPlaySoundActionParams>(_);