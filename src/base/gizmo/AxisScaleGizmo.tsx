import { AxisScaleGizmo as BabylonAxisScaleGizmo, Color3, ScaleGizmo, UtilityLayerRenderer, Vector3 } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
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
    const { init, dragAxis, color, gizmoLayer, parent, thickness } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAxisScaleGizmo(dragAxis, color, gizmoLayer, parent, thickness );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAxisScaleGizmo = buildExtends<IAxisScaleGizmoProps & IAxisScaleGizmoParams>(_);