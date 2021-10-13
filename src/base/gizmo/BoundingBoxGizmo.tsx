import { BoundingBoxGizmo as BabylonBoundingBoxGizmo, Color3, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useLayoutEffect } from "react";
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { GizmoHOC } from './Gizmo';

export type IBoundingBoxGizmoProps = IComponentProps & {
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

function _(props: IBoundingBoxGizmoProps) {
    const { init, color, gizmoLayer } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonBoundingBoxGizmo(color, gizmoLayer);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PBoundingBoxGizmo = getEL<IBoundingBoxGizmoParams>(_, [
    BoundingBoxGizmoHOC,
    GizmoHOC,
    ComponentHOC
])