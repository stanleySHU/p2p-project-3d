import { Color4, LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type ILinesInitial<T> = IMeshInitial<T> & {
    name: string,
    points: Vector3[];
    updatable?: boolean;
    instance?: Nullable<LinesMesh>;  //?
    colors?: Color4[];
    useVertexAlpha?: boolean;
};
export type ILinesProps = ILinesInitial<BabylonMesh> & ILinesOptions;

function LinesHOC<T>(EL: React.FC<T>) {
    return (props: T & ILinesProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            console.log(`Lines ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateLines(name, props, scene);
                console.log(`Lines ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LinesHOC(e));
}

export const P2PLines = buildExtends<ILinesProps>(ChildHOC(null));

export type ILinesOptions = {

}