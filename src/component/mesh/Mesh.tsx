import { Mesh as BabylonMesh } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { Nullable } from "../../utils/customType";
import { ITransformNodeInitial, extendsFrom as _extendsFrom  } from "../node/TransformNode";
import { SceneContext } from "../Scene";

export type IMeshInitial<T> = ITransformNodeInitial<T> & {
    source?: Nullable<BabylonMesh>,
    parent?: Nullable<Node>, //这个怎么处理。。。
    doNotCloneChildren?: boolean,
    clonePhysicsImpostor?: boolean
};
export type IMeshProps = IMeshInitial<BabylonMesh> & IMeshOptions;

export function MeshHOC<T>(EL: Nullable<React.FC<IMeshProps>>) {
    return (props: IMeshProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name, source, doNotCloneChildren, clonePhysicsImpostor } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = new BabylonMesh(name, scene!, null, source, doNotCloneChildren, clonePhysicsImpostor);
                console.log(`Mesh ${name} created`);
            }
        }, [])
        
        return EL && <EL {...props}/>
    };
}

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(MeshHOC(e));
}

export const P2PMesh = extendsFrom<IMeshProps>(null);

export type IMeshOptions = {
    
}