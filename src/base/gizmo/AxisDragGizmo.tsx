import { AxisDragGizmo as BabylonAxisDragGizmo, Color3, PositionGizmo, UtilityLayerRenderer, Vector3 } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren, getEL, ComponentHOC } from "../Component";
import { GizmoHOC } from './Gizmo';

export type IAxisDragGizmoProps = IComponentProps & {
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

function _(props: IAxisDragGizmoProps) {
    const { init, dragAxis, color, gizmoLayer, parent, thickness } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonAxisDragGizmo(dragAxis, color, gizmoLayer, parent, thickness );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PAxisDragGizmo = getEL<IAxisDragGizmoParams>(_, [
    AxisDragGizmoHOC,
    GizmoHOC,
    ComponentHOC
]);