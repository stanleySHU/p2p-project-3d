import { Color4, Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type ICylinderInitial<T> = IMeshInitial<T> & {
    height?: number;
    diameterTop?: number;
    diameterBottom?: number;
    diameter?: number;
    tessellation?: number;
    subdivisions?: number;
    arc?: number;
    faceColors?: Color4[];
    faceUV?: Vector4[];
    updatable?: boolean;
    hasRings?: boolean;
    enclose?: boolean;
    cap?: number;
    sideOrientation?: number;
    frontUVs?: Vector4;
    backUVs?: Vector4;
};
export type ICylinderProps = ICylinderInitial<BabylonMesh> & ICylinderOptions;

function CylinderHOC<T>(EL: React.FC<T>) {
    return (props: T & ICylinderProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`Cylinder ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateCylinder(name, props, scene);
                console.log(`Cylinder ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CylinderHOC(e));
}

export const P2PCylinder = buildExtends<ICylinderProps>(ChildHOC(null));

export type ICylinderOptions = {

}