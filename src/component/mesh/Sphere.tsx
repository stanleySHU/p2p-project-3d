import { Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type ISphereInitial<T> = IMeshInitial<T> & {
    segments?: number;
    diameter?: number;
    diameterX?: number;
    diameterY?: number;
    diameterZ?: number;
    arc?: number;
    slice?: number;
    sideOrientation?: number;
    frontUVs?: Vector4;
    backUVs?: Vector4;
    updatable?: boolean;
};
export type ISphereProps = ISphereInitial<BabylonMesh> & ISphereOptions;

function SphereHOC<T>(EL: React.FC<T>) {
    return (props: T & ISphereProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`Sphere ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateSphere(name, props, scene);
                console.log(`Sphere ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(SphereHOC(e));
}

export const P2PSphere = buildExtends<ISphereProps>(ChildHOC(null));

export type ISphereOptions = {

}