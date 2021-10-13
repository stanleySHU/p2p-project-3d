import { RawTexture3D as BabylonRawTexture3D, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IRawTexture3DProps = IComponentProps & {
    data: ArrayBufferView, 
    width: number, 
    height: number, 
    depth: number, 
    format: number, 
    scene: BabylonScene, 
    generateMipMaps?: boolean, 
    invertY?: boolean, 
    samplingMode?: number, 
    textureType?: number
}

export type IRawTexture3DParams = {

}

function RawTexture3DHOC(EL: React.FC) {
    return (props: IRawTexture3DParams) => {
        return <EL {...props}/>
    }
}

function _(props: IRawTexture3DProps) {
    const { init, data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRawTexture3D(data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRawTexture3D = getEL<IRawTexture3DParams>(_, [
    RawTexture3DHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);
