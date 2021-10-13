import { GizmoManager, PositionGizmo as BabylonPositionGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { GizmoHOC } from './Gizmo';

export type IPositionGizmoProps = IComponentProps & {
    gizmoLayer?: UtilityLayerRenderer, 
    thickness?: number, 
    gizmoManager?: GizmoManager
}

export type IPositionGizmoParams = {

}

function PositionGizmoHOC(EL: React.FC) {
    return (props: IPositionGizmoParams) => {
        return <EL {...props}/>
    }
}

function _(props: IPositionGizmoProps) {
    const { init, gizmoLayer, thickness, gizmoManager } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPositionGizmo(gizmoLayer, thickness, gizmoManager);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPositionGizmo = getEL<IPositionGizmoParams>(_, [
    PositionGizmoHOC,
    GizmoHOC,
    ComponentHOC
]);