import { PointerDragBehavior as BabylonPointerDragBehavior, TransformNode, Vector3 } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { buildExtends as _buildExtends, IComponentProps, P2PChildren } from '../../Component'

export type IPointerDragBehaviorProps = IComponentProps<BabylonPointerDragBehavior> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PointerDragBehaviorHOC(e));
}

function _(props: IPointerDragBehaviorProps) {
    const { init, options } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPointerDragBehavior(options);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPointerDragBehavior = buildExtends<IPointerDragBehaviorProps & IPointerDragBehaviorParams>(_);