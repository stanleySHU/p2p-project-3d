import { Mesh as BabylonMesh, Scene as  BabylonScene } from "@babylonjs/core";
import React, { useEffect } from "react";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";
import { ITransformNodeInitial, buildExtends as _buildExtends  } from "../node/TransformNode";

export type IMeshInitial<T> = ITransformNodeInitial<T> & {
    scene?: BabylonScene,
    name: string,
    source?: Nullable<BabylonMesh>,
    parent?: Nullable<Node>, //这个怎么处理。。。
    doNotCloneChildren?: boolean,
    clonePhysicsImpostor?: boolean
};
export type IMeshProps = IMeshInitial<BabylonMesh> & IMeshOptions;

function MeshHOC<T>(EL: React.FC<T>) {
    return (props: T & IMeshProps) => {
        const { scene, instance, name, source, doNotCloneChildren, clonePhysicsImpostor } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonMesh(name, scene, null, source, doNotCloneChildren, clonePhysicsImpostor);
            }
        }, [])
        
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MeshHOC(e));
}

export const P2PMesh = buildExtends<IMeshProps>(ChildHOC(null));

export type IMeshOptions = {
    
}