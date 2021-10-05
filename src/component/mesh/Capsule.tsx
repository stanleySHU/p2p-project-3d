import { ICreateCapsuleOptions, Mesh as BabylonMesh, MeshBuilder } from "@babylonjs/core";
import React, { useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { ChildHOC } from "../Component";

export type ICapsuleInitial<T> = IMeshInitial<T> & {
    name: string
} & ICreateCapsuleOptions;
export type ICapsuleProps = ICapsuleInitial<BabylonMesh> & ICapsuleOptions;

function CapsuleHOC<T>(EL: React.FC<T>) {
    return (props: T & ICapsuleProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            console.log(`Capsule ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateCapsule(name, props, scene); 
                console.log(`Capsule ${name} created`);
            }
        }, []); 

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CapsuleHOC(e));
}

export const P2PCapsule = buildExtends<ICapsuleProps>(ChildHOC(null));

export type ICapsuleOptions = {
    
}