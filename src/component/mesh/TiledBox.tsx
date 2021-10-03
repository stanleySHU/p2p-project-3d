import { Color4, Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../scene/Scene";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type ITiledBoxInitial<T> = IMeshInitial<T> & {
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
};
export type ITiledBoxProps = ITiledBoxInitial<BabylonMesh> & IGroupOptions;

function TiledBoxHOC<T>(EL: React.FC<T>) {
    return (props: T & ITiledBoxProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`TiledBox ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateTiledBox(name, props, scene);
                console.log(`TiledBox ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TiledBoxHOC(e));
}

export const P2PTiledBox = buildExtends<ITiledBoxProps>(ChildHOC(null));

export type IGroupOptions = {

}