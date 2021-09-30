import { Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type IGroundInitial<T> = IMeshInitial<T> & {
    width?: number,
    height?: number,
    subdivisions?: number,
    subdivisionsX?: number,
    subdivisionsY?: number,
    updatable?: boolean
};
export type IGroundProps = IGroundInitial<BabylonMesh> & IGroundOptions;

function GroundHOC<T>(EL: Nullable<React.FC<T>>) {
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

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(GroundHOC(e));
}

export const P2PGround = extendsFrom<IGroundProps>(null);
export type IGroundOptions = {
    
}