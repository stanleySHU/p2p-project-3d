import { Color3, PlaneRotationGizmo as BabylonPlaneRotationGizmo, RotationGizmo, UtilityLayerRenderer, Vector3 } from '@babylonjs/core';
import React, { useEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type IPlaneRotationGizmoProps = IComponentProps<BabylonPlaneRotationGizmo> & {
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
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlaneRotationGizmoHOC(e));
}

function _(props: IPlaneRotationGizmoProps) {
    const { instance, planeNormal, color, gizmoLayer, tessellation, parent, useEulerRotation, thickness } =  props;
    useEffect(() => {
        instance!.current = new BabylonPlaneRotationGizmo(planeNormal, color, gizmoLayer, tessellation, parent, useEulerRotation, thickness);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPlaneRotationGizmo = buildExtends<IPlaneRotationGizmoProps & IPlaneRotationGizmoParams>(_);