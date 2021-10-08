import { Color4, MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';

export type ITiledBoxProps = IComponentProps<BabylonMesh> & {
    name: string,
    options: {
        pattern?: number;
        size?: number;
        width?: number;
        height?: number;
        depth: number;
        tileSize?: number;
        tileWidth?: number;
        tileHeight?: number;
        faceUV?: Vector4[];
        faceColors?: Color4[];
        alignHorizontal?: number;
        alignVertical?: number;
        sideOrientation?: number;
        updatable?: boolean;
    }, 
    scene?: Nullable<BabylonScene>
}

export type ITiledBoxParams = {

}

function TiledBoxHOC(EL: React.FC) {
    return (props: ITiledBoxParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TiledBoxHOC(e));
}

function _(props: ITiledBoxProps) {
    const { instance, name, options, scene } =  props;
    useEffect(() => {
        instance!.current = MeshBuilder.CreateTiledBox(name, options, scene);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTiledBox = buildExtends<ITiledBoxProps & ITiledBoxParams>(_);