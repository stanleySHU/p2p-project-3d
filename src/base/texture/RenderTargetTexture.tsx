import { RenderTargetTexture as BabylonRenderTargetTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './Texture'

export type IRenderTargetTextureProps = IComponentProps<BabylonRenderTargetTexture> & {
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

function RenderTargetTextureHOC(EL: React.FC) {
    return (props: IRenderTargetTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RenderTargetTextureHOC(e));
}

function _(props: IRenderTargetTextureProps) {
    const { init, name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format, delayAllocation, samples, creationFlags} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRenderTargetTexture(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format, delayAllocation, samples, creationFlags);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRenderTargetTexture = buildExtends<IRenderTargetTextureProps & IRenderTargetTextureParams>(_);