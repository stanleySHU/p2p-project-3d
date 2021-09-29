import { ICreateCapsuleOptions, Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type ICapsuleInitial<T> = ICreateCapsuleOptions & IMeshInitial<T>;
export type ICapsuleProps = ICapsuleInitial<BabylonMesh> & ICapsuleOptions;

const CapsuleHOC = (EL: Nullable<React.FC<ICapsuleProps>>) => {
    return (props: ICapsuleProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateCapsule(name, props, scene); 
                console.log(`Capsule ${name} created`);
            }
        }, []); 

        return EL && <EL {...props}/>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(CapsuleHOC(e));
}

export const P2PCapsule = extendsFrom<ICapsuleProps>(null);

export type ICapsuleOptions = {
    
}