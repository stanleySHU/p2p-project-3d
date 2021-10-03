import { Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, buildExtends as _buildExtends } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";
import { ChildHOC } from "../Component";

export type IDiscInitial<T> = IMeshInitial<T> & {
    radius?: number;
    tessellation?: number;
    arc?: number;
    updatable?: boolean;
    sideOrientation?: number;
    frontUVs?: Vector4;
    backUVs?: Vector4;
};
export type IDiscProps = IDiscInitial<BabylonMesh> & IDiscOptions;

function DiscHOC<T>(EL: React.FC<T>) {
    return (props: T & IDiscProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name } = props;

        useEffect(() => {
            console.log(`Disc ${name} called`);
            if (instance && !instance.current) {
                instance.current = MeshBuilder.CreateDisc(name, props, scene);
                console.log(`Disc ${name} created`);
            }
        }, []);

        return <EL {...props}/>
    }
};

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DiscHOC(e));
}

export const P2PDisc = buildExtends<IDiscProps>(ChildHOC(null));

export type IDiscOptions = {

}