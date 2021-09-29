import { Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type ITiledGroundInitial<T> = {
    xmin: number;
    zmin: number;
    xmax: number;
    zmax: number;
    subdivisions?: {
        w: number;
        h: number;
    };
    precision?: {
        w: number;
        h: number;
    };
    updatable?: boolean;
} & IMeshInitial<T>;
export type ITiledGroundProps = ITiledGroundInitial<BabylonMesh> & ITiledGroundOptions;

const TiledGroundHOC = (EL: Nullable<React.FC<ITiledGroundProps>>) => {
    return (props: ITiledGroundProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateTiledGround(name, props, scene);
                console.log(`TiledGround ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TiledGroundHOC(e));
}

export const P2PTiledGround = extendsFrom<ITiledGroundProps>(null);

export type ITiledGroundOptions = {

}