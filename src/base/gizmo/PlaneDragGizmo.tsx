import { Color3, PlaneDragGizmo as BabylonPlaneDragGizmo, PositionGizmo, UtilityLayerRenderer, Vector3 } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type IPlaneDragGizmoProps = IComponentProps<BabylonPlaneDragGizmo> & {
    dragPlaneNormal: Vector3, 
    color?: Color3, 
    gizmoLayer?: UtilityLayerRenderer, 
    parent?: Nullable<PositionGizmo>
}

export type IPlaneDragGizmoParams = {

}

function PlaneDragGizmoHOC(EL: React.FC) {
    return (props: IPlaneDragGizmoParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlaneDragGizmoHOC(e));
}

function _(props: IPlaneDragGizmoProps) {
    const { init, dragPlaneNormal, color, gizmoLayer, parent } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPlaneDragGizmo(dragPlaneNormal, color, gizmoLayer, parent);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPlaneDragGizmo = buildExtends<IPlaneDragGizmoProps & IPlaneDragGizmoParams>(_);