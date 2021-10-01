import { Color4, LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type ILinesInitial<T> = IMeshInitial<T> & {
    points: Vector3[];
    updatable?: boolean;
    instance?: Nullable<LinesMesh>;  //?
    colors?: Color4[];
    useVertexAlpha?: boolean;
};
export type ILinesProps = ILinesInitial<BabylonMesh> & ILinesOptions;

function LinesHOC<T>(EL: React.FC<T>) {
    return (props: T & ILinesProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`Lines ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateLines(name, props, scene);
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