import { Mesh as BabylonMesh, Scene as  BabylonScene } from "@babylonjs/core";
import React, { useLayoutEffect, useReducer } from "react";
import { Nullable } from "../../utils/customType";
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from "../Component";

export type IMeshProps = IComponentProps & {
    name: string, 
    scene?: Nullable<BabylonScene>, 
    parent?: Nullable<Node>, 
    source?: Nullable<BabylonMesh>, 
    doNotCloneChildren?: boolean, 
    clonePhysicsImpostor?: boolean
}

export type IMeshParams = {

}

export function MeshHOC(EL: React.FC) {
    return (props: IMeshParams) => {
        return <EL {...props}/>
    }
}

function _(props: IMeshProps) {
    const { init, name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonMesh(name, scene, parent as any, source, doNotCloneChildren, clonePhysicsImpostor);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMesh = getEL<IMeshParams>(_, [
    MeshHOC,
    ComponentHOC
]);