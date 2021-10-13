import { GizmoManager, ScaleGizmo as BabylonScaleGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { GizmoHOC } from './Gizmo';

export type IScaleGizmoProps = IComponentProps & {
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

function _(props: IScaleGizmoProps) {
    const { init, gizmoLayer, thickness, gizmoManager } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonScaleGizmo(gizmoLayer, thickness, gizmoManager);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PScaleGizmo = getEL<IScaleGizmoParams>(_, [
    ScaleGizmoHOC,
    GizmoHOC,
    ComponentHOC
]);