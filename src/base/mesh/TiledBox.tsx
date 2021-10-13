import { Color4, MeshBuilder, Scene as BabylonScene, Vector4, Mesh as BabylonMesh } from '@babylonjs/core';
import { useEffect, useLayoutEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { MeshHOC } from './Mesh';

export type ITiledBoxProps = IComponentProps & {
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

function _(props: ITiledBoxProps) {
    const { init, name, options, scene } =  props;
    useLayoutEffect(() => {
        let obj = MeshBuilder.CreateTiledBox(name, options, scene);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTiledBox = getEL<ITiledBoxParams>(_, [
    TiledBoxHOC,
    MeshHOC,
    ComponentHOC
])