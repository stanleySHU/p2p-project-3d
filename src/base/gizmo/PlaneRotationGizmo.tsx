import { Color3, PlaneRotationGizmo as BabylonPlaneRotationGizmo, RotationGizmo, UtilityLayerRenderer, Vector3 } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren, getEL, ComponentHOC } from "../Component";
import { GizmoHOC } from './Gizmo';

export type IPlaneRotationGizmoProps = IComponentProps & {
    planeNormal: Vector3, 
    color?: Color3, 
    gizmoLayer?: UtilityLayerRenderer, 
    tessellation?: number, 
    parent?: Nullable<RotationGizmo>, 
    useEulerRotation?: boolean, 
    thickness?: number
}

export type IPlaneRotationGizmoParams = {

}

function PlaneRotationGizmoHOC(EL: React.FC) {
    return (props: IPlaneRotationGizmoParams) => {
        return <EL {...props}/>
    }
}

function _(props: IPlaneRotationGizmoProps) {
    const { init, planeNormal, color, gizmoLayer, tessellation, parent, useEulerRotation, thickness } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPlaneRotationGizmo(planeNormal, color, gizmoLayer, tessellation, parent, useEulerRotation, thickness);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPlaneRotationGizmo = getEL<IPlaneRotationGizmoParams>(_, [
    PlaneRotationGizmoHOC,
    GizmoHOC,
    ComponentHOC
]);