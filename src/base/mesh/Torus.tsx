import { Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { ChildHOC } from "../Component";

export type ITorusInitial<T> = IMeshInitial<T> & {
    diameter?: number;
    thickness?: number;
    tessellation?: number;
    updatable?: boolean;
    sideOrientation?: number;
    frontUVs?: Vector4;
    backUVs?: Vector4;
} ;
export type ITorusProps = ITorusInitial<BabylonMesh> & ITorusOptions;

function TorusHOC<T>(EL: React.FC<T>) {
    return (props: T & ITorusProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateTorus(name, props, scene);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TorusHOC(e));
}

export const P2PTorus = buildExtends<ITorusProps>(ChildHOC(null));

export type ITorusOptions = {

}