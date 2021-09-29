import { Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type IGroundInitial<T> = {
    width?: number,
    height?: number,
    subdivisions?: number,
    subdivisionsX?: number,
    subdivisionsY?: number,
    updatable?: boolean
} & IMeshInitial<T>;
export type IGroundProps = IGroundInitial<BabylonMesh> & IGroundOptions;

const GroundHOC = (EL: Nullable<React.FC<IGroundProps>>) => {
    return (props: IGroundProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateGround(name, props, scene); 
                console.log(`Ground ${name} created`);
            }
        }, []); 

        return EL && <EL {...props}/>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(GroundHOC(e));
}

export const P2PGround = extendsFrom<IGroundProps>(null);

export type IGroundOptions = {
    
}