import { ICreateCapsuleOptions, Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type ICapsuleInitial<T> = IMeshInitial<T> & ICreateCapsuleOptions;
export type ICapsuleProps = ICapsuleInitial<BabylonMesh> & ICapsuleOptions;

function CapsuleHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & ICapsuleProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`Capsule ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateCapsule(name, props, scene); 
                console.log(`Capsule ${name} created`);
            }
        }, []); 

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(CapsuleHOC(e));
}

export const P2PCapsule = extendsFrom<ICapsuleProps>(null);

export type ICapsuleOptions = {
    
}