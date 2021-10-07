import { PointerDragBehavior as BabylonPointerDragBehavior, TransformNode, Vector3 } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { buildExtends as _buildExtends } from '../../Component'

export type IPointerDragBehaviorProps = {
    options?: {
        dragAxis?: Vector3;
        dragPlaneNormal?: Vector3;
    }
}

export type IPointerDragBehaviorParams = {

}

function PointerDragBehaviorHOC<T>(EL: React.FC<T>) {
    return (props: T & IPointerDragBehaviorParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PointerDragBehaviorHOC(e));
}

function _(props: IPointerDragBehaviorProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { options } =  props;
    useEffect(() => {
        let obj = new BabylonPointerDragBehavior(options);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PPointerDragBehavior = buildExtends<IPointerDragBehaviorProps & IPointerDragBehaviorParams>(_);