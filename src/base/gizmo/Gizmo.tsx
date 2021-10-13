import { Gizmo as BabylonGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";

export type IGizmoProps = IComponentProps & {
    gizmoLayer?: UtilityLayerRenderer
}

export type IGizmoParams = {

}

export function GizmoHOC(EL: React.FC) {
    return (props: IGizmoParams) => {
        return <EL {...props}/>
    }
}

function _(props: IGizmoProps) {
    const { init, gizmoLayer } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonGizmo(gizmoLayer);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PGizmo = getEL<IGizmoParams>(_, [
    GizmoHOC,
    ComponentHOC
])