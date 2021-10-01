import { LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type IDashedLinesInitial<T> = IMeshInitial<T> & {
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
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`DashedLines ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateDashedLines(name, props, scene);
                console.log(`DashedLines ${name} created`);
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