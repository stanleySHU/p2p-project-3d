import { VideoTexture as BabylonVideoTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine, VideoTextureSettings } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './Texture'

export type IVideoTextureProps = {
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

function VideoTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IVideoTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VideoTextureHOC(e));
}

function _(props: IVideoTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, src, scene, generateMipMaps, invertY, samplingMode, settings, onError } =  props;
    useEffect(() => {
        let obj = new BabylonVideoTexture(name, src, scene, generateMipMaps, invertY, samplingMode, settings, onError );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PVideoTexture = buildExtends<IVideoTextureProps & IVideoTextureParams>(_);