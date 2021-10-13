import { NoiseProceduralTexture as BabylonNoiseProceduralTexture, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { ProceduralTextureHOC } from './ProceduralTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type INoiseProceduralTextureProps =  IComponentProps & {
    name: string, 
    size?: number, 
    scene?: Nullable<BabylonScene>, 
    fallbackTexture?: Texture, 
    generateMipMaps?: boolean
}

export type INoiseProceduralTextureParams = {

}

function NoiseProceduralTextureHOC(EL: React.FC) {
    return (props: INoiseProceduralTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: INoiseProceduralTextureProps) {
    const { init, name, size, scene, fallbackTexture, generateMipMaps } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonNoiseProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PNoiseProceduralTexture = getEL<INoiseProceduralTextureParams>(_, [
    NoiseProceduralTextureHOC,
    ProceduralTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);