import { InterpolateValueAction as BabylonInterpolateValueAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type IInterpolateValueActionInitial<T> = IActionInitial<T> & {
    target: any, 
    propertyPath: string, 
    value: any, 
    duration?: number, 
    stopOtherAnimations?: boolean, 
    onInterpolationDone?: () => void
};
export type IInterpolateValueActionProps = IInterpolateValueActionInitial<BabylonInterpolateValueAction>;

function InterpolateValueActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IInterpolateValueActionProps) => {
        const { instance, name, triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonInterpolateValueAction(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations, onInterpolationDone);
                console.log(`InterpolateValueAction ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(InterpolateValueActionHOC(e));
}

export const P2PInterpolateValueAction = buildExtends<IInterpolateValueActionProps>(ChildHOC(null));

export type IInterpolateValueActionOptions = {};

