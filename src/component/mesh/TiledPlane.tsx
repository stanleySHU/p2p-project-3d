import { Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type ITiledPlaneInitial<T> = IMeshInitial<T> & {
    pattern?: number;
    tileSize?: number;
    tileWidth?: number;
    tileHeight?: number;
    size?: number;
    width?: number;
    height?: number;
    alignHorizontal?: number;
    alignVertical?: number;
    sideOrientation?: number;
    frontUVs?: Vector4;
    backUVs?: Vector4;
    updatable?: boolean;
};
export type ITiledPlaneProps = ITiledPlaneInitial<BabylonMesh> & ITiledPlaneOptions;

function TiledPlaneHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & ITiledPlaneProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`TiledPlane ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateTiledPlane(name, props, scene);
                console.log(`TiledPlane ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TiledPlaneHOC(e));
}

export const P2PTiledPlane = extendsFrom<ITiledPlaneProps>(null);

export type ITiledPlaneOptions = {

}