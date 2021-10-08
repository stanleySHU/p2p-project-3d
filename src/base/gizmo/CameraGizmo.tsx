import { CameraGizmo as BabylonCameraGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type ICameraGizmoProps = IComponentProps<BabylonCameraGizmo> & {
    gizmoLayer?: UtilityLayerRenderer
}

export type ICameraGizmoParams = {

}

function CameraGizmoHOC(EL: React.FC) {
    return (props: ICameraGizmoParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CameraGizmoHOC(e));
}

function _(props: ICameraGizmoProps) {
    const { instance, gizmoLayer} =  props;
    useEffect(() => {
        instance!.current = new BabylonCameraGizmo(gizmoLayer);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCameraGizmo = buildExtends<ICameraGizmoProps & ICameraGizmoParams>(_);