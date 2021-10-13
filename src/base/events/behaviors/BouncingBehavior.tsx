import { BouncingBehavior as BabylonBouncingBehavior } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IBouncingBehaviorProps = IComponentProps & {}

export type IBouncingBehaviorParams = {

}

function BouncingBehaviorHOC(EL: React.FC) {
    return (props: IBouncingBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IBouncingBehaviorProps) {
    const { init } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonBouncingBehavior();
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBouncingBehavior = getEL<IBouncingBehaviorParams>(_, [
    BouncingBehaviorHOC,
    ComponentHOC
])