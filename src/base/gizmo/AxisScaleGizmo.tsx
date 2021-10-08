import { AxisScaleGizmo as BabylonAxisScaleGizmo, Color3, ScaleGizmo, UtilityLayerRenderer, Vector3 } from '@babylonjs/core';
import React, { useEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type IAxisScaleGizmoProps = IComponentProps<BabylonAxisScaleGizmo> & {
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
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AxisScaleGizmoHOC(e));
}

function _(props: IAxisScaleGizmoProps) {
    const { instance, dragAxis, color, gizmoLayer, parent, thickness } =  props;
    useEffect(() => {
        instance!.current = new BabylonAxisScaleGizmo(dragAxis, color, gizmoLayer, parent, thickness );
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAxisScaleGizmo = buildExtends<IAxisScaleGizmoProps & IAxisScaleGizmoParams>(_);