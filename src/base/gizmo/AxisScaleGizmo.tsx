import { AxisScaleGizmo as BabylonAxisScaleGizmo, Color3, ScaleGizmo, UtilityLayerRenderer, Vector3 } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { GizmoHOC } from './Gizmo';

export type IAxisScaleGizmoProps = IComponentProps & {
    dragAxis: Vector3, 
    color?: Color3, 
    gizmoLayer?: UtilityLayerRenderer, 
    parent?: Nullable<ScaleGizmo>, 
    thickness?: number
}

export type IAxisScaleGizmoParams = {

}

function AxisScaleGizmoHOC(EL: React.FC) {
    return (props: IAxisScaleGizmoParams) => {
        return <EL {...props}/>
    }
}

function _(props: IAxisScaleGizmoProps) {
    const { init, dragAxis, color, gizmoLayer, parent, thickness } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAxisScaleGizmo(dragAxis, color, gizmoLayer, parent, thickness );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAxisScaleGizmo = getEL<IAxisScaleGizmoParams>(_, [
    AxisScaleGizmoHOC,
    GizmoHOC,
    ComponentHOC
])

