import { LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type IDashedLinesInitial<T> = IMeshInitial<T> & {
    points: Vector3[];
    dashSize?: number;
    gapSize?: number;
    dashNb?: number;
    updatable?: boolean;
    instance?: LinesMesh;
};
export type IDashedLinesProps = IDashedLinesInitial<BabylonMesh> & IDashedLinesOptions;

function DashedLinesHOC<T>(EL: Nullable<React.FC<T>>) {
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

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(DashedLinesHOC(e));
}

export const P2PDashedLines = extendsFrom<IDashedLinesProps>(null);

export type IDashedLinesOptions = {

}