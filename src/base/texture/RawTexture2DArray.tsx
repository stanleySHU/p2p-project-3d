import { RawTexture2DArray as BabylonRawTexture2DArray, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { TextureHOC } from './Texture'
import { ThinTextureHOC } from './ThinTexture';

export type IRawTexture2DArrayProps = IComponentProps & {
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

export type IRawTexture2DArrayParams = {

}

function RawTexture2DArrayHOC(EL: React.FC) {
    return (props: IRawTexture2DArrayParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IRawTexture2DArrayProps) {
    const { init, data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRawTexture2DArray(data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRawTexture2DArray = getEL<IRawTexture2DArrayParams>(_, [
    RawTexture2DArrayHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);