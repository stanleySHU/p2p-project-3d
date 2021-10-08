import { MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type ITorusProps = IComponentProps<BabylonMesh> & {
    name: string, 
    options: {
        diameter?: number;
        thickness?: number;
        tessellation?: number;
        updatable?: boolean;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ITorusParams = {

}

function TorusHOC(EL: React.FC) {
    return (props: ITorusParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TorusHOC(e));
}

function _(props: ITorusProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateTorus(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTorus = buildExtends<ITorusProps & ITorusParams>(_);