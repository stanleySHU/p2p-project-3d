import { SixDofDragBehavior as BabylonSixDofDragBehavior, TransformNode } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type ISixDofDragBehaviorProps = IComponentProps<BabylonSixDofDragBehavior> & {}

export type ISixDofDragBehaviorParams = {

}

function SixDofDragBehaviorHOC(EL: React.FC) {
    return (props: ISixDofDragBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SixDofDragBehaviorHOC(e));
}

function _(props: ISixDofDragBehaviorProps) {
    const { instance } =  props;
    useEffect(() => {
        instance!.current = new BabylonSixDofDragBehavior();
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PSixDofDragBehavior = buildExtends<ISixDofDragBehaviorProps & ISixDofDragBehaviorParams>(_);