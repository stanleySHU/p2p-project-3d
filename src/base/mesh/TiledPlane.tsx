import { MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MeshHOC } from './Mesh';

export type ITiledPlaneProps = IComponentProps &  {
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

function _(props: ITiledPlaneProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateTiledPlane(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTiledPlane = getEL<ITiledPlaneParams>(_, [
    TiledPlaneHOC,
    MeshHOC,
    ComponentHOC
]);