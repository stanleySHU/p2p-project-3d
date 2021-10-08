import { Mesh as BabylonMesh, Scene as  BabylonScene } from "@babylonjs/core";
import React, { useEffect, useReducer } from "react";
import { Nullable } from "../../utils/customType";
import { IComponentProps, P2PChildren } from "../Component";
import { newChildren } from "../ComponentRedux";
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
    const { instance, name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor } =  props;
    useEffect(() => {
        instance!.current = new BabylonMesh(name, scene, parent as any, source, doNotCloneChildren, clonePhysicsImpostor);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMesh = buildExtends<IMeshProps & IMeshParams>(_);