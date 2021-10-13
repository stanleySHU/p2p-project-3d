import { RenderTargetTexture as BabylonRenderTargetTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren, getEL, ComponentHOC } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IRenderTargetTextureProps = IComponentProps & {
    name: string, 
    size: number | {
        width: number;
        height: number;
        layers?: number;
    } | {
        ratio: number;
    }, 
    scene: Nullable<BabylonScene>, 
    generateMipMaps?: boolean, 
    doNotChangeAspectRatio?: boolean, 
    type?: number, 
    isCube?: boolean, 
    samplingMode?: number, 
    generateDepthBuffer?: boolean, 
    generateStencilBuffer?: boolean, 
    isMulti?: boolean, 
    format?: number, 
    delayAllocation?: boolean, 
    samples?: number, 
    creationFlags?: number
}

export type IRenderTargetTextureParams = {

}

export function RenderTargetTextureHOC(EL: React.FC) {
    return (props: IRenderTargetTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IRenderTargetTextureProps) {
    const { init, name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format, delayAllocation, samples, creationFlags} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRenderTargetTexture(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format, delayAllocation, samples, creationFlags);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRenderTargetTexture = getEL<IRenderTargetTextureParams>(_, [
    RenderTargetTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);