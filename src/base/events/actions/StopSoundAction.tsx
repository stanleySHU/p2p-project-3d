import { Action, StopSoundAction as BabylonStopSoundAction, Condition, Sound } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component';
import { ActionHOC } from './Action';

export type IStopSoundActionProps = IComponentProps&  {
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

function _(props: IStopSoundActionProps) {
    const { init, triggerOptions, sound, condition } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonStopSoundAction(triggerOptions, sound, condition );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PStopSoundAction = getEL<IStopSoundActionParams>(_, [
    StopSoundActionHOC,
    ActionHOC,
    ComponentHOC
])