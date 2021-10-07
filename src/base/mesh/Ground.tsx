import { Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { ChildHOC } from "../Component";

export type IGroundInitial<T> = IMeshInitial<T> & {
    name: string,
    width?: number,
    height?: number,
    subdivisions?: number,
    subdivisionsX?: number,
    subdivisionsY?: number,
    updatable?: boolean
};
export type IGroundProps = IGroundInitial<BabylonMesh> & IGroundOptions;

function GroundHOC<T>(EL: React.FC<T>) {
    return (props: T & IGroundProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateGround(name, props, scene); 
            }
        }, []); 

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(GroundHOC(e));
}

export const P2PGround = buildExtends<IGroundProps>(ChildHOC(null));
export type IGroundOptions = {}