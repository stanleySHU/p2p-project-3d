import { LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { ChildHOC } from "../Component";

export type IDashedLinesInitial<T> = IMeshInitial<T> & {
    name: string,
    points: Vector3[];
    dashSize?: number;
    gapSize?: number;
    dashNb?: number;
    updatable?: boolean;
    instance?: LinesMesh;
};
export type IDashedLinesProps = IDashedLinesInitial<BabylonMesh> & IDashedLinesOptions;

function DashedLinesHOC<T>(EL: React.FC<T>) {
    return (props: T & IDashedLinesProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateDashedLines(name, props, scene);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DashedLinesHOC(e));
}

export const P2PDashedLines = buildExtends<IDashedLinesProps>(ChildHOC(null));

export type IDashedLinesOptions = {

}