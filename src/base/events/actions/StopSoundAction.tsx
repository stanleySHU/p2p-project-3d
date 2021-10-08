import { Action, StopSoundAction as BabylonStopSoundAction, Condition, Sound } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type IStopSoundActionProps = IComponentProps<BabylonStopSoundAction> &  {
    triggerOptions: any, 
    sound: Sound, 
    condition?: Condition
}

export type IStopSoundActionParams = {

}

function StopSoundActionHOC(EL: React.FC) {
    return (props: IStopSoundActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(StopSoundActionHOC(e));
}

function _(props: IStopSoundActionProps) {
    const { instance, triggerOptions, sound, condition } =  props;
    useEffect(() => {
        instance!.current = new BabylonStopSoundAction(triggerOptions, sound, condition );
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStopSoundAction = buildExtends<IStopSoundActionProps & IStopSoundActionParams>(_);