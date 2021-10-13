import { PointerDragBehavior as BabylonPointerDragBehavior, TransformNode, Vector3 } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../../Component'

export type IPointerDragBehaviorProps = IComponentProps & {
    options?: {
        dragAxis?: Vector3;
        dragPlaneNormal?: Vector3;
    }
}

export type IPointerDragBehaviorParams = {

}

function PointerDragBehaviorHOC(EL: React.FC) {
    return (props: IPointerDragBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IPointerDragBehaviorProps) {
    const { init, options } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPointerDragBehavior(options);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPointerDragBehavior = getEL<IPointerDragBehaviorParams>(_, [
    PointerDragBehaviorHOC,
    ComponentHOC
]);