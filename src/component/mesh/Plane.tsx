import { Mesh as BabylonMesh, MeshBuilder, Plane, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";
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
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`Plane ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreatePlane(name, props, scene);
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