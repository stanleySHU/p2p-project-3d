import { SixDofDragBehavior as BabylonSixDofDragBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type ISixDofDragBehaviorProps = IComponentProps & {}

export type ISixDofDragBehaviorParams = {

}

function SixDofDragBehaviorHOC(EL: React.FC) {
    return (props: ISixDofDragBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ISixDofDragBehaviorProps) {
    const { init } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonSixDofDragBehavior();
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSixDofDragBehavior = getEL<ISixDofDragBehaviorParams>(_, [
    SixDofDragBehaviorHOC,
    ComponentHOC
]);