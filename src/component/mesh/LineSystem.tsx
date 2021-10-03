import { Color4, LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type ILineSystemInitial<T> = IMeshInitial<T> & {
    lines: Vector3[][];
    updatable?: boolean;
    instance?: Nullable<LinesMesh>;
    colors?: Nullable<Color4[][]>;
    useVertexAlpha?: boolean;
};
export type ILineSystemProps = ILineSystemInitial<BabylonMesh> & ILineSystemOptions;

function LineSystemHOC<T>(EL: React.FC<T>) {
    return (props: T & ILineSystemProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`LineSystem ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateLineSystem(name, props, scene!);
                console.log(`LineSystem ${name} created`);
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