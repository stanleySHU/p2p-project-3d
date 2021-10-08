import { Gizmo as BabylonGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useReducer } from "react";
import { IComponentProps, P2PChildren, buildExtends as _buildExtends } from "../Component";

export type IGizmoProps = IComponentProps<BabylonGizmo> & {
    gizmoLayer?: UtilityLayerRenderer
}

export type IGizmoParams = {

}

function GizmoHOC(EL: React.FC) {
    return (props: IGizmoParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(GizmoHOC(e));
}

function _(props: IGizmoProps) {
    const { instance, gizmoLayer } =  props;
    useEffect(() => {
        instance!.current = new BabylonGizmo(gizmoLayer);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PGizmo = buildExtends<IGizmoProps & IGizmoParams>(_);