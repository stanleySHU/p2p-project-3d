import { FramingBehavior as BabylonFramingBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IFramingBehaviorProps = IComponentProps & {}

export type IFramingBehaviorParams = {

}

function FramingBehaviorHOC(EL: React.FC) {
    return (props: IFramingBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IFramingBehaviorProps) {
    const { init } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonFramingBehavior();
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PFramingBehavior = getEL<IFramingBehaviorParams>(_, [
    FramingBehaviorHOC,
    ComponentHOC
]);