import { VideoTexture as BabylonVideoTexture, VideoTextureSettings, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { ITextureInitial, buildExtends as _buildExtends } from './Texture';

export type IVideoTextureInitial<T> = ITextureInitial<T> & {
    scene: Nullable<BabylonScene>,
    name: string,
    src: string | string[] | HTMLVideoElement, 
    generateMipMaps?: boolean | undefined, 
    invertY?: boolean | undefined, 
    samplingMode?: number | undefined, 
    settings?: VideoTextureSettings
}
export type IVideoTextureProps = IVideoTextureInitial<BabylonVideoTexture>;

function VideoTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IVideoTextureProps) => {
        const { scene, instance, name, src, generateMipMaps, invertY, samplingMode, settings} = props;

        useEffect(() => {
            console.log(`VideoTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonVideoTexture(name, src, scene, generateMipMaps, invertY, samplingMode, settings);
                console.log(`VideoTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(VideoTextureHOC(e));
}

export const P2PVideoTexture = buildExtends<IVideoTextureProps>(ChildHOC(null));
    
export type IVideoTextureOptions = {};