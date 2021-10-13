import { MultiPointerScaleBehavior as BabylonMultiPointerScaleBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IMultiPointerScaleBehaviorProps = IComponentProps & {}

export type IMultiPointerScaleBehaviorParams = {

}

function MultiPointerScaleBehaviorHOC(EL: React.FC) {
    return (props: IMultiPointerScaleBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IMultiPointerScaleBehaviorProps) {
    const { init } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonMultiPointerScaleBehavior();
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiPointerScaleBehavior = getEL<IMultiPointerScaleBehaviorParams>(_, [
    MultiPointerScaleBehaviorHOC,
    ComponentHOC
]);