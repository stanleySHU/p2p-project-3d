import { MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type ITiledPlaneProps = IComponentProps<BabylonMesh> &  {
    name: string, 
    options: {
        pattern?: number;
        tileSize?: number;
        tileWidth?: number;
        tileHeight?: number;
        size?: number;
        width?: number;
        height?: number;
        alignHorizontal?: number;
        alignVertical?: number;
        sideOrientation?: number;
        frontUVs?: Vector4;
        backUVs?: Vector4;
        updatable?: boolean;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ITiledPlaneParams = {

}

function TiledPlaneHOC(EL: React.FC) {
    return (props: ITiledPlaneParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TiledPlaneHOC(e));
}

function _(props: ITiledPlaneProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateTiledPlane(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTiledPlane = buildExtends<ITiledPlaneProps & ITiledPlaneParams>(_);