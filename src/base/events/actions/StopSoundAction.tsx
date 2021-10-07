import { Sound, StopSoundAction as BabylonStopSoundAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type IStopSoundActionInitial<T> = IActionInitial<T> & {
    sound: Sound
};
export type IStopSoundActionProps = IStopSoundActionInitial<BabylonStopSoundAction>;

function StopSoundActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IStopSoundActionProps) => {
        const { instance, name, triggerOptions, sound, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonStopSoundAction(triggerOptions, sound, condition);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(StopSoundActionHOC(e));
}

export const P2PStopSoundAction = buildExtends<IStopSoundActionProps>(ChildHOC(null));

export type IStopSoundActionOptions = {};