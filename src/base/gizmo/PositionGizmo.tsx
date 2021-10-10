import { GizmoManager, PositionGizmo as BabylonPositionGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type IPositionGizmoProps = IComponentProps<BabylonPositionGizmo> & {
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
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PositionGizmoHOC(e));
}

function _(props: IPositionGizmoProps) {
    const { init, gizmoLayer, thickness, gizmoManager } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonPositionGizmo(gizmoLayer, thickness, gizmoManager);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PPositionGizmo = buildExtends<IPositionGizmoProps & IPositionGizmoParams>(_);