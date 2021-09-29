import { Mesh as BabylonMesh, MeshBuilder, Plane, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

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

const PlaneHOC = (EL: Nullable<React.FC<IPlaneProps>>) => {
    return (props: IPlaneProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreatePlane(name, props, scene);
                console.log(`Plane ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(PlaneHOC(e));
}

export const P2PPlane = extendsFrom<IPlaneProps>(null);

export type IPlaneOptions = {

}