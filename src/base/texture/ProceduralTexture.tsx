import { ProceduralTexture as BabylonProceduralTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IProceduralTextureProps = IComponentProps & {
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

export function ProceduralTextureHOC(EL: React.FC) {
    return (props: IProceduralTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IProceduralTextureProps) {
    const { init, name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube, textureType } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonProceduralTexture(name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube, textureType);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PProceduralTexture = getEL<IProceduralTextureParams>(_, [
    ProceduralTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);