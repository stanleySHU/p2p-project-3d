import { Mesh as BabylonMesh } from "@babylonjs/core";
import React, { ReactElement, ReactNode, useEffect, useRef, useState } from "react";

export type IMeshInitial = {
    name: string,
    updatable?: boolean
}

// export function getMesh<T>(createShape: (props: T) => Mesh, update: (props: T) => void) {
//     return (props: T) => {
//         const meshRef = useRef(createShape(props));
//         return null;
//     };
// }

export function MeshHOC<T>(EL) {
    return (props: T) => {
        function updateMesh() {

        }
        return <EL {...props} updateMesh={updateMesh}></EL>
    };
}