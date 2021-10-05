import { Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { ChildHOC } from "../Component";

export type ITiledGroundInitial<T> = IMeshInitial<T> & {
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
};
export type ITiledGroundProps = ITiledGroundInitial<BabylonMesh> & ITiledGroundOptions;

function TiledGroundHOC<T>(EL: React.FC<T>) {
    return (props: T & ITiledGroundProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            console.log(`TiledGround ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateTiledGround(name, props, scene);
                console.log(`TiledGround ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TiledGroundHOC(e));
}

export const P2PTiledGround = buildExtends<ITiledGroundProps>(ChildHOC(null));

export type ITiledGroundOptions = {

}