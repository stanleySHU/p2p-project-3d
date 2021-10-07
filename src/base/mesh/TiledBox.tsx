import { Color4, MeshBuilder, Scene as BabylonScene, Vector4 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ITiledBoxProps = {
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

function TiledBoxHOC<T>(EL: React.FC<T>) {
    return (props: T & ITiledBoxProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TiledBoxHOC(e));
}

function _(props: ITiledBoxProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateTiledBox(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PTiledBox = buildExtends<ITiledBoxProps & ITiledBoxParams>(_);