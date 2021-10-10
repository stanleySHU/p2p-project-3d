import { BoundingBoxGizmo as BabylonBoundingBoxGizmo, Color3, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type IBoundingBoxGizmoProps = IComponentProps<BabylonBoundingBoxGizmo> & {
    color?: Color3, 
    gizmoLayer?: UtilityLayerRenderer
}

export type IBoundingBoxGizmoParams = {

}

function BoundingBoxGizmoHOC(EL: React.FC) {
    return (props: IBoundingBoxGizmoParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BoundingBoxGizmoHOC(e));
}

function _(props: IBoundingBoxGizmoProps) {
    const { init, color, gizmoLayer } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonBoundingBoxGizmo(color, gizmoLayer);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBoundingBoxGizmo = buildExtends<IBoundingBoxGizmoProps & IBoundingBoxGizmoParams>(_);