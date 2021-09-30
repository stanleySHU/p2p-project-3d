import { Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

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

function TorusHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & ITorusProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`Torus ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateTorus(name, props, scene);
                console.log(`Torus ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TorusHOC(e));
}

export const P2PTorus = extendsFrom<ITorusProps>(null);

export type ITorusOptions = {

}