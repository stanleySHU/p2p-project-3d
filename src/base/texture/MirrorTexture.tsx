import { MirrorTexture as BabylonMirrorTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { RenderTargetTextureHOC } from './RenderTargetTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IMirrorTextureProps = IComponentProps & {
    name: string, 
    size: number | {
        width: number;
        height: number;
    } | {
        ratio: number;
    }, 
    scene: BabylonScene, 
    generateMipMaps?: boolean, 
    type?: number, 
    samplingMode?: number, 
    generateDepthBuffer?: boolean
}

export type IMirrorTextureParams = {

}

function MirrorTextureHOC(EL: React.FC) {
    return (props: IMirrorTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IMirrorTextureProps) {
    const { init, name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer } =  props;
    useLayoutEffect(() => {
       let obj = new BabylonMirrorTexture( name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer );
       init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMirrorTexture = getEL<IMirrorTextureParams>(_, [
    MirrorTextureHOC,
    RenderTargetTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);