import { CameraGizmo as BabylonCameraGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { GizmoHOC } from './Gizmo';

export type ICameraGizmoProps = IComponentProps & {
    gizmoLayer?: UtilityLayerRenderer
}

export type ICameraGizmoParams = {

}

function CameraGizmoHOC(EL: React.FC) {
    return (props: ICameraGizmoParams) => {
        return <EL {...props}/>
    }
}

function _(props: ICameraGizmoProps) {
    const { init, gizmoLayer} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonCameraGizmo(gizmoLayer);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCameraGizmo = getEL<ICameraGizmoParams>(_, [
    CameraGizmoHOC,
    GizmoHOC,
    ComponentHOC
]);