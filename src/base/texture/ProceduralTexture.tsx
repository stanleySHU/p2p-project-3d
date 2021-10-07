import { ProceduralTexture as BabylonProceduralTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './Texture'

export type IProceduralTextureProps = {
    name: string, 
    size: RenderTargetTextureSize, 
    fragment: any, 
    scene: Nullable<BabylonScene>, 
    fallbackTexture?: Nullable<Texture>, 
    generateMipMaps?: boolean, 
    isCube?: boolean, 
    textureType?: number
}

export type IProceduralTextureParams = {

}

function ProceduralTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IProceduralTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ProceduralTextureHOC(e));
}

function _(props: IProceduralTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube, textureType } =  props;
    useEffect(() => {
        let obj = new BabylonProceduralTexture(name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube, textureType);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PProceduralTexture = buildExtends<IProceduralTextureProps & IProceduralTextureParams>(_);