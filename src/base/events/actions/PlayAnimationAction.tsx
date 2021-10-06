import { PlayAnimationAction as BabylonPlayAnimationAction } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../../Component';
import { IActionInitial, buildExtends as _buildExtends } from './Action';

export type IPlayAnimationActionInitial<T> = IActionInitial<T> & {
    target: any, 
    from: number, 
    to: number, 
    loop?: boolean
};
export type IPlayAnimationActionProps = IPlayAnimationActionInitial<BabylonPlayAnimationAction>;

function PlayAnimationActionHOC<T>(EL: React.FC<T>) {
    return (props: T & IPlayAnimationActionProps) => {
        const { instance, name, triggerOptions, target, from, to, loop, condition } = props;
        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonPlayAnimationAction(triggerOptions, target, from, to, loop, condition);
                console.log(`PlayAnimationAction ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    }
}

function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlayAnimationActionHOC(e));
}

export const P2PPlayAnimationAction = buildExtends<IPlayAnimationActionProps>(ChildHOC(null));

export type IPlayAnimationActionOptions = {};

