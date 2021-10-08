import { ProceduralTexture as BabylonProceduralTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './Texture'

export type IProceduralTextureProps = IComponentProps<BabylonProceduralTexture> & {
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

function ProceduralTextureHOC(EL: React.FC) {
    return (props: IProceduralTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ProceduralTextureHOC(e));
}

function _(props: IProceduralTextureProps) {
    const { instance, name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube, textureType } =  props;
    useEffect(() => {
        instance!.current = new BabylonProceduralTexture(name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube, textureType);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PProceduralTexture = buildExtends<IProceduralTextureProps & IProceduralTextureParams>(_);