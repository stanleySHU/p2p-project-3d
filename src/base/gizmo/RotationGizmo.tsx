import { GizmoManager, RotationGizmo as BabylonRotationGizmo, RotationGizmoOptions, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type IRotationGizmoProps = IComponentProps<BabylonRotationGizmo> & {
    gizmoLayer?: UtilityLayerRenderer, 
    tessellation?: number, 
    useEulerRotation?: boolean, 
    thickness?: number, 
    gizmoManager?: GizmoManager, 
    options?: RotationGizmoOptions
}

export type IRotationGizmoParams = {

}

function RotationGizmoHOC(EL: React.FC) {
    return (props: IRotationGizmoParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RotationGizmoHOC(e));
}

function _(props: IRotationGizmoProps) {
    const { init, gizmoLayer, tessellation, useEulerRotation, thickness, gizmoManager, options } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRotationGizmo(gizmoLayer, tessellation, useEulerRotation, thickness, gizmoManager, options);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRotationGizmo = buildExtends<IRotationGizmoProps & IRotationGizmoParams>(_);