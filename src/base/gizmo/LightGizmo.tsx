import { LightGizmo as BabylonLightGizmo, UtilityLayerRenderer } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "./Gizmo";

export type ILightGizmoProps = IComponentProps<BabylonLightGizmo> & {
    gizmoLayer?: UtilityLayerRenderer
}

export type ILightGizmoParams = {

}

function LightGizmoHOC(EL: React.FC) {
    return (props: ILightGizmoParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LightGizmoHOC(e));
}

function _(props: ILightGizmoProps) {
    const { init, gizmoLayer } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonLightGizmo(gizmoLayer);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PLightGizmo = buildExtends<ILightGizmoProps & ILightGizmoParams>(_);