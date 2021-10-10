import { VideoTexture as BabylonVideoTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine, VideoTextureSettings } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './Texture'

export type IVideoTextureProps = IComponentProps<BabylonVideoTexture> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VideoTextureHOC(e));
}

function _(props: IVideoTextureProps) {
    const { init, name, src, scene, generateMipMaps, invertY, samplingMode, settings, onError } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonVideoTexture(name, src, scene, generateMipMaps, invertY, samplingMode, settings, onError );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PVideoTexture = buildExtends<IVideoTextureProps & IVideoTextureParams>(_);