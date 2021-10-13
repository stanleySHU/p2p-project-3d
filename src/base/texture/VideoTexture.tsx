import { VideoTexture as BabylonVideoTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine, VideoTextureSettings } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IVideoTextureProps = IComponentProps & {
    name: Nullable<string>, 
    src: string | string[] | HTMLVideoElement, 
    scene: Nullable<BabylonScene>, 
    generateMipMaps?: boolean, 
    invertY?: boolean, 
    samplingMode?: number, 
    settings?: VideoTextureSettings, 
    onError?: Nullable<(message?: string, exception?: any) => void>
}

export type IVideoTextureParams = {

}

function VideoTextureHOC(EL: React.FC) {
    return (props: IVideoTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IVideoTextureProps) {
    const { init, name, src, scene, generateMipMaps, invertY, samplingMode, settings, onError } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonVideoTexture(name, src, scene, generateMipMaps, invertY, samplingMode, settings, onError );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVideoTexture = getEL<IVideoTextureParams>(_, [
    VideoTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);