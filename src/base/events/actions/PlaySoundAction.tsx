import { Action, PlaySoundAction as BabylonPlaySoundAction, Condition, Sound } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type IPlaySoundActionProps = IComponentProps<BabylonPlaySoundAction> & {
    triggerOptions: any, 
    sound: Sound, 
    condition?: Condition
}

export type IPlaySoundActionParams = {

}

function PlaySoundActionHOC(EL: React.FC) {
    return (props: IPlaySoundActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlaySoundActionHOC(e));
}

function _(props: IPlaySoundActionProps) {
    const { instance, triggerOptions, sound, condition } =  props;
    useEffect(() => {
        instance!.current = new BabylonPlaySoundAction(triggerOptions, sound, condition);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPlaySoundAction = buildExtends<IPlaySoundActionProps & IPlaySoundActionParams>(_);