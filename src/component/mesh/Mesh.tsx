import { Mesh as BabylonMesh } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";
import { ITransformNodeInitial, buildExtends as _buildExtends  } from "../node/TransformNode";
import { SceneContext } from "../scene/Scene";

export type IMeshInitial<T> = ITransformNodeInitial<T> & {
    name: string,
    source?: Nullable<BabylonMesh>,
    parent?: Nullable<Node>, //这个怎么处理。。。
    doNotCloneChildren?: boolean,
    clonePhysicsImpostor?: boolean
};
export type IMeshProps = IMeshInitial<BabylonMesh> & IMeshOptions;

function MeshHOC<T>(EL: React.FC<T>) {
    return (props: T & IMeshProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, source, doNotCloneChildren, clonePhysicsImpostor } = props;

        useEffect(() => {
            console.log(`Mesh ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonMesh(name, scene!, null, source, doNotCloneChildren, clonePhysicsImpostor);
                console.log(`Mesh ${name} created`);
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