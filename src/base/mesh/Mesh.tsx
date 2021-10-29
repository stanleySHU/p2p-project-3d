import { Mesh as BabylonMesh, Scene as  BabylonScene } from "@babylonjs/core";
import React, { useLayoutEffect } from "react";
import { Nullable } from "../../utils/customType";
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";
import { INodeParams, NodeHOC } from "../node/Node";
import { ITransformNodeParams, TransformNodeHOC } from "../node/TransformNode";
import { AbstractMeshHOC } from "./AbstractMesh";

export type IMeshProps = IComponentProps & {
    name: string, 
    scene?: Nullable<BabylonScene>, 
    parent?: Nullable<Node>, 
    source?: Nullable<BabylonMesh>, 
    doNotCloneChildren?: boolean, 
    clonePhysicsImpostor?: boolean
}

export type IMeshParams = INodeParams & ITransformNodeParams & {

}

function _MeshHOC(EL: React.FC<IMeshParams>) {
    return (props: IMeshParams) => {
        return <EL {...props}/>
    }
}

export function MeshHOC(EL) {
    return getEL(EL, [
        _MeshHOC,
        AbstractMeshHOC,
        TransformNodeHOC,
        NodeHOC
    ]);
}

function _(props: IMeshProps) {
    const { init, name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonMesh(name, scene, parent as any, source, doNotCloneChildren, clonePhysicsImpostor);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMesh = getEL<IMeshParams & IMeshProps>(_, [
    MeshHOC,
    ComponentHOC
]);