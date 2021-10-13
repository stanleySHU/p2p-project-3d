import { LightGizmo as BabylonLightGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useLayoutEffect } from "react";
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { GizmoHOC } from './Gizmo';

export type ILightGizmoProps = IComponentProps & {
    gizmoLayer?: UtilityLayerRenderer
}

export type ILightGizmoParams = {

}

function LightGizmoHOC(EL: React.FC) {
    return (props: ILightGizmoParams) => {
        return <EL {...props}/>
    }
}

function _(props: ILightGizmoProps) {
    const { init, gizmoLayer } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonLightGizmo(gizmoLayer);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLightGizmo = getEL<ILightGizmoParams>(_, [
    LightGizmoHOC,
    GizmoHOC,
    ComponentHOC
]);