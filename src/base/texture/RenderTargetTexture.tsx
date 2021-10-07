import { RenderTargetTexture as BabylonRenderTargetTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './Texture'

export type IRenderTargetTextureProps = {
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

function RenderTargetTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRenderTargetTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RenderTargetTextureHOC(e));
}

function _(props: IRenderTargetTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format, delayAllocation, samples, creationFlags} =  props;
    useEffect(() => {
        let obj = new BabylonRenderTargetTexture(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format, delayAllocation, samples, creationFlags);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PRenderTargetTexture = buildExtends<IRenderTargetTextureProps & IRenderTargetTextureParams>(_);