import { Mesh as BabylonMesh, Scene as  BabylonScene } from "@babylonjs/core";
import React, { useEffect, useReducer } from "react";
import { Nullable } from "../../utils/customType";
import { newChildren } from "../ComponentRedux";
import { reducer, initialState } from './MeshRedux';
import { buildExtends as _buildExtends  } from "../node/TransformNode";

export type IMeshProps = {
    name: string, 
    scene?: Nullable<BabylonScene>, 
    parent?: Nullable<Node>, 
    source?: Nullable<BabylonMesh>, 
    doNotCloneChildren?: boolean, 
    clonePhysicsImpostor?: boolean
}

export type IMeshParams = {

}

function MeshHOC<T>(EL: React.FC<T>) {
    return (props: T & IMeshProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MeshHOC(e));
}

function _(props: IMeshProps) {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor } =  props;
    useEffect(() => {
        let obj = new BabylonMesh(name, scene, parent as any, source, doNotCloneChildren, clonePhysicsImpostor);
        dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PMesh = buildExtends<IMeshProps & IMeshParams>(_);