import { Mesh as BabylonMesh, MeshBuilder, Vector4 } from "@babylonjs/core";
import React, { useContext, useEffect } from "react";
import { IMeshInitial, extendsFrom as _extendsFrom } from "./Mesh";
import { SceneContext } from "../Scene";
import { Nullable } from "../../utils/customType";

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

const DiscHOC = (EL: Nullable<React.FC<IDiscProps>>) => {
    return (props: IDiscProps) => {
        const { scene } = useContext(SceneContext);
        const { instanceRef, name } = props;

        useEffect(() => {
            if (instanceRef && !instanceRef.current) {
                instanceRef.current = MeshBuilder.CreateDisc(name, props, scene);
                console.log(`Disc ${name} created`);
            }
        }, []);

        return EL && <EL {...props}/>
    }
};

export function extendsFrom<T>(e: any) {
    return _extendsFrom<T>(DiscHOC(e));
}

export const P2PDisc = extendsFrom<IDiscProps>(null);

export type IDiscOptions = {

}