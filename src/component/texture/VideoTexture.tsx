import { VideoTexture as BabylonVideoTexture, VideoTextureSettings } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { ITextureInitial, buildExtends as _buildExtends } from './Texture';

export type IVideoTextureInitial<T> = ITextureInitial<T> & {
    src: string | string[] | HTMLVideoElement, 
    generateMipMaps?: boolean | undefined, 
    invertY?: boolean | undefined, 
    samplingMode?: number | undefined, 
    settings?: VideoTextureSettings
}
export type IVideoTextureProps = IVideoTextureInitial<BabylonVideoTexture>;

function VideoTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IVideoTextureProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, src, generateMipMaps, invertY, samplingMode, settings} = props;

        useEffect(() => {
            console.log(`VideoTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonVideoTexture(name, src, scene!, generateMipMaps, invertY, samplingMode, settings);
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