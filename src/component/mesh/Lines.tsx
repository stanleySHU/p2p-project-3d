import { Color4, LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type ILinesInitial<T> = IMeshInitial<T> & {
    points: Vector3[];
    updatable?: boolean;
    instance?: Nullable<LinesMesh>;  //?
    colors?: Color4[];
    useVertexAlpha?: boolean;
};
export type ILinesProps = ILinesInitial<BabylonMesh> & ILinesOptions;

function LinesHOC<T>(EL: Nullable<React.FC<T>>) {
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

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(LinesHOC(e));
}

export const P2PLines = extendsFrom<ILinesProps>(null);

export type ILinesOptions = {

}