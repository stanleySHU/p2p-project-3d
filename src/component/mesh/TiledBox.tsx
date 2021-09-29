import { Color4, Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type ITiledBoxInitial<T> = {
    pattern?: number;
    size?: number;
    width?: number;
    height?: number;
    depth: number;
    tileSize?: number;
    tileWidth?: number;
    tileHeight?: number;
    faceUV?: Vector4[];
    faceColors?: Color4[];
    alignHorizontal?: number;
    alignVertical?: number;
    sideOrientation?: number;
    updatable?: boolean;
} & IMeshInitial<T>;
export type ITiledBoxProps = ITiledBoxInitial<BabylonMesh> & IGroupOptions;

const TiledBoxHOC = (EL: Nullable<React.FC<ITiledBoxProps>>) => {
    return (props: ITiledBoxProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateTiledBox(name, props, scene);
                console.log(`TiledBox ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TiledBoxHOC(e));
}

export const P2PTiledBox = extendsFrom<ITiledBoxProps>(null);

export type IGroupOptions = {

}