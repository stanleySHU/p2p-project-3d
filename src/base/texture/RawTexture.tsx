import { RawTexture as BabylonRawTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IRawTextureProps = IComponentProps & {
    data: Nullable<ArrayBufferView>, 
    width: number, 
    height: number, 
    format: number, 
    sceneOrEngine: Nullable<BabylonScene | ThinEngine>, 
    generateMipMaps?: boolean, 
    invertY?: boolean, 
    samplingMode?: number, 
    type?: number, 
    creationFlags?: number
}

export type IRawTextureParams = {

}

function RawTextureHOC(EL: React.FC) {
    return (props: IRawTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IRawTextureProps) {
    const { init, data, width, height, format, sceneOrEngine, generateMipMaps, invertY, samplingMode, type, creationFlags } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRawTexture(data, width, height, format, sceneOrEngine, generateMipMaps, invertY, samplingMode, type, creationFlags);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRawTexture = getEL<IRawTextureParams>(_, [
    RawTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);