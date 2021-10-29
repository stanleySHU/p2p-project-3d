import { FadeInOutBehavior as BabylonFadeInOutBehavior } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IFadeInOutBehaviorProps = IComponentProps &{}
export type IFadeInOutBehaviorParams = {

}

function FadeInOutBehaviorHOC(EL: React.FC) {
    return (props: IFadeInOutBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IFadeInOutBehaviorProps) {
    const { init } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonFadeInOutBehavior();
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFadeInOutBehavior = getEL<IFadeInOutBehaviorParams>(_, [
    FadeInOutBehaviorHOC,
    ComponentHOC
])