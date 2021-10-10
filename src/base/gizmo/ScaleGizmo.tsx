import { GizmoManager, ScaleGizmo as BabylonScaleGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type IScaleGizmoProps = IComponentProps<BabylonScaleGizmo> & {
    gizmoLayer?: UtilityLayerRenderer, 
    thickness?: number, 
    gizmoManager?: GizmoManager
}

export type IScaleGizmoParams = {

}

function ScaleGizmoHOC(EL: React.FC) {
    return (props: IScaleGizmoParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ScaleGizmoHOC(e));
}

function _(props: IScaleGizmoProps) {
    const { init, gizmoLayer, thickness, gizmoManager } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonScaleGizmo(gizmoLayer, thickness, gizmoManager);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PScaleGizmo = buildExtends<IScaleGizmoProps & IScaleGizmoParams>(_);