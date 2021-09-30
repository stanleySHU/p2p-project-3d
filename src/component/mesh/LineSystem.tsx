import { Color4, LinesMesh, Mesh as BabylonMesh, MeshBuilder, Vector3 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

export type ILineSystemInitial<T> = IMeshInitial<T> & {
    lines: Vector3[][];
    updatable?: boolean;
    instance?: Nullable<LinesMesh>;
    colors?: Nullable<Color4[][]>;
    useVertexAlpha?: boolean;
};
export type ILineSystemProps = ILineSystemInitial<BabylonMesh> & ILineSystemOptions;

function LineSystemHOC<T>(EL: Nullable<React.FC<T>>) {
    return (props: T & ILineSystemProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            console.log(`LineSystem ${name} called`);
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateLineSystem(name, props, scene!);
                console.log(`LineSystem ${name} created`);
            }
        }, []);

        if (EL == null) return <>{props.children}</>
        return <EL {...props}>
            {props.children}
        </EL>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(LineSystemHOC(e));
}

export const P2PLineSystem = extendsFrom<ILineSystemProps>(null);

export type ILineSystemOptions = {

}