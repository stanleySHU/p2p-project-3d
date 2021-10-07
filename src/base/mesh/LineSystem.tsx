import { Color4, LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type ILineSystemInitial<T> = IMeshInitial<T> & {
    name: string,
    lines: Vector3[][];
    updatable?: boolean;
    instance?: Nullable<LinesMesh>;
    colors?: Nullable<Color4[][]>;
    useVertexAlpha?: boolean;
};
export type ILineSystemProps = ILineSystemInitial<BabylonMesh> & ILineSystemOptions;

function LineSystemHOC<T>(EL: React.FC<T>) {
    return (props: T & ILineSystemProps) => {
        const { scene, instance, name } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateLineSystem(name, props, scene!);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(LineSystemHOC(e));
}

export const P2PLineSystem = buildExtends<ILineSystemProps>(ChildHOC(null));

export type ILineSystemOptions = {

}