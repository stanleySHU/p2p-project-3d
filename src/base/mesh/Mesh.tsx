import { Mesh as BabylonMesh, Scene as  BabylonScene } from "@babylonjs/core";
import React, { useEffect, useLayoutEffect, useReducer } from "react";
import { Nullable } from "../../utils/customType";
import { IComponentProps, P2PChildren } from "../Component";
import { buildExtends as _buildExtends  } from "../node/TransformNode";

export type IMeshProps = IComponentProps<BabylonMesh> & {
    name: string, 
    scene?: Nullable<BabylonScene>, 
    parent?: Nullable<Node>, 
    source?: Nullable<BabylonMesh>, 
    doNotCloneChildren?: boolean, 
    clonePhysicsImpostor?: boolean
}

export type IMeshParams = {

}

function MeshHOC(EL: React.FC) {
    return (props: IMeshParams) => {
        return <EL {...props}/>
    }
}
export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MeshHOC(e));
}

function _(props: IMeshProps) {
    const { init, name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonMesh(name, scene, parent as any, source, doNotCloneChildren, clonePhysicsImpostor);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMesh = buildExtends<IMeshProps & IMeshParams>(_);