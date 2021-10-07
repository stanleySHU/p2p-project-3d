import { MeshBuilder, Scene as BabylonScene, Vector4 } from '@babylonjs/core';
import { buildExtends as _buildExtends } from './Mesh';
import { useEffect, useReducer } from "react"
import { Nullable } from '../../utils/customType';

export type ITiledPlaneProps = {
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

function TiledPlaneHOC<T>(EL: React.FC<T>) {
    return (props: T & ITiledPlaneProps) => {
        useEffect(() => {

        })
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TiledPlaneHOC(e));
}

function _(props: ITiledPlaneProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene } =  props;
    useEffect(() => {
        let obj = MeshBuilder.CreateTiledPlane(name, options, scene);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PTiledPlane = buildExtends<ITiledPlaneProps & ITiledPlaneParams>(_);