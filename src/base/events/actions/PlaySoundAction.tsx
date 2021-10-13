import { Action, PlaySoundAction as BabylonPlaySoundAction, Condition, Sound } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type IPlaySoundActionProps = IComponentProps & {
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

function _(props: IPlaySoundActionProps) {
    const { init, triggerOptions, sound, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPlaySoundAction(triggerOptions, sound, condition);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPlaySoundAction = getEL<IPlaySoundActionParams>(_, [
    PlaySoundActionHOC,
    ActionHOC,
    ComponentHOC
]);