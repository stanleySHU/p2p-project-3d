import { PlaySoundAction as BabylonPlaySoundAction, Sound } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type IPlaySoundActionInitial<T> = IActionInitial<T> & {
    sound: Sound
};
export type IPlaySoundActionProps = IPlaySoundActionInitial<BabylonPlaySoundAction>;

function PlaySoundActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IPlaySoundActionProps) => {
        const { instance, name, triggerOptions, sound, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonPlaySoundAction(triggerOptions, sound, condition);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlaySoundActionHOC(e));
}

export const P2PPlaySoundAction = buildExtends<IPlaySoundActionProps>(ChildHOC(null));

export type IPlaySoundActionOptions = {};