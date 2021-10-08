import { Action, PlayAnimationAction as BabylonPlayAnimationAction, Condition } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IComponentProps, P2PChildren } from '../../Component';
import { buildExtends as _buildExtends } from './Action'

export type IPlayAnimationActionProps = IComponentProps<BabylonPlayAnimationAction> & {
    triggerOptions: any, 
    target: any, 
    from: number, 
    to: number, 
    loop?: boolean, 
    condition?: Condition
}

export type IPlayAnimationActionParams = {

}

function PlayAnimationActionHOC(EL: React.FC) {
    return (props: IPlayAnimationActionParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlayAnimationActionHOC(e));
}

function _(props: IPlayAnimationActionProps) {
    const { instance, triggerOptions, target, from, to, loop, condition } =  props;
    useEffect(() => {
        instance!.current = new BabylonPlayAnimationAction(triggerOptions, target, from, to, loop, condition);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPlayAnimationAction = buildExtends<IPlayAnimationActionProps & IPlayAnimationActionParams>(_);