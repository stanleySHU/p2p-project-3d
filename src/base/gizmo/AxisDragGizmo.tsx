import { AxisDragGizmo as BabylonAxisDragGizmo, Color3, PositionGizmo, UtilityLayerRenderer, Vector3 } from '@babylonjs/core';
import React, { useEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type IAxisDragGizmoProps = IComponentProps<BabylonAxisDragGizmo> & {
    dragAxis: Vector3, 
    color?: Color3, 
    gizmoLayer?: UtilityLayerRenderer, 
    parent?: Nullable<PositionGizmo>, 
    thickness?: number
}

export type IAxisDragGizmoParams = {

}

function AxisDragGizmoHOC(EL: React.FC) {
    return (props: IAxisDragGizmoParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AxisDragGizmoHOC(e));
}

function _(props: IAxisDragGizmoProps) {
    const { instance, dragAxis, color, gizmoLayer, parent, thickness } =  props;
    useEffect(() => {
        instance!.current = new BabylonAxisDragGizmo(dragAxis, color, gizmoLayer, parent, thickness );
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAxisDragGizmo = buildExtends<IAxisDragGizmoProps & IAxisDragGizmoParams>(_);