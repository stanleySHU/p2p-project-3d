import { Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

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

function SphereHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & ISphereProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`Sphere ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateSphere(name, props, scene);
                console.log(`Sphere ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(SphereHOC(e));
}

export const P2PSphere = extendsFrom<ISphereProps>(null);

export type ISphereOptions = {

}