import { Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type IGroundInitial<T> = IMeshInitial<T> & {
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
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`Ground ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateGround(name, props, scene); 
                console.log(`Ground ${name} created`);
            }
        }, []); 

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(GroundHOC(e));
}

export const P2PGround = buildExtends<IGroundProps>(ChildHOC(null));
export type IGroundOptions = {
    
}