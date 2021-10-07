import { StopAnimationAction as BabylonStopAnimationAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type IStopAnimationActionInitial<T> = IActionInitial<T> & {
    target: any
};
export type IStopAnimationActionProps = IStopAnimationActionInitial<BabylonStopAnimationAction>;

function StopAnimationActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IStopAnimationActionProps) => {
        const { instance, name, triggerOptions, target, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonStopAnimationAction(triggerOptions, target, condition);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(StopAnimationActionHOC(e));
}

export const P2PStopAnimationAction = buildExtends<IStopAnimationActionProps>(ChildHOC(null));

export type IStopAnimationActionOptions = {};