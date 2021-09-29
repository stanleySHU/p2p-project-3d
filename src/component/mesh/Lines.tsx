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

const LinesHOC = (EL: Nullable<React.FC<ILinesProps>>) => {
    return (props: ILinesProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateLines(name, props, scene);
                console.log(`Lines ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(LinesHOC(e));
}

export const P2PLines = extendsFrom<ILinesProps>(null);

export type ILinesOptions = {

}