import { Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

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

function TiledGroundHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & ITiledGroundProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`TiledGround ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateTiledGround(name, props, scene);
                console.log(`TiledGround ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(TiledGroundHOC(e));
}

export const P2PTiledGround = extendsFrom<ITiledGroundProps>(null);

export type ITiledGroundOptions = {

}