import { Mesh as BabylonMesh, MeshBuilder, Plane, Vector4 } from "@babylonjs/core";
import React, { useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { ChildHOC } from "../Component";

export type IPlaneInitial<T> = IMeshInitial<T> & {
    size?: number;
    width?: number;
    height?: number;
    sideOrientation?: number;
    frontUVs?: Vector4;
    backUVs?: Vector4;
    updatable?: boolean;
    sourcePlane?: Plane;
};
export type IPlaneProps = IPlaneInitial<BabylonMesh> & IPlaneOptions;

function PlaneHOC<T>(EL: React.FC<T>) {
    return (props: T & IPlaneProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            console.log(`Plane ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreatePlane(name, props, scene);
                console.log(`Plane ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(PlaneHOC(e));
}

export const P2PPlane = buildExtends<IPlaneProps>(ChildHOC(null));

export type IPlaneOptions = {

}