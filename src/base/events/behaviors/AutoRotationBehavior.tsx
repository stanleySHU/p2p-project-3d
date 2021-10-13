import { AutoRotationBehavior as BabylonAutoRotationBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IAutoRotationBehaviorProps = IComponentProps &  {}

export type IAutoRotationBehaviorParams = {

}

function AutoRotationBehaviorHOC(EL: React.FC) {
    return (props: IAutoRotationBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IAutoRotationBehaviorProps) {
    const { init } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAutoRotationBehavior();
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAutoRotationBehavior = getEL<IAutoRotationBehaviorParams>(_, [
    AutoRotationBehaviorHOC,
    ComponentHOC
])