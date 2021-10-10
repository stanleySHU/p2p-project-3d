import { MultiPointerScaleBehavior as BabylonMultiPointerScaleBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IMultiPointerScaleBehaviorProps = IComponentProps<BabylonMultiPointerScaleBehavior> & {}

export type IMultiPointerScaleBehaviorParams = {

}

function MultiPointerScaleBehaviorHOC(EL: React.FC) {
    return (props: IMultiPointerScaleBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiPointerScaleBehaviorHOC(e));
}

function _(props: IMultiPointerScaleBehaviorProps) {
    const { init } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonMultiPointerScaleBehavior();
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiPointerScaleBehavior = buildExtends<IMultiPointerScaleBehaviorProps & IMultiPointerScaleBehaviorParams>(_);