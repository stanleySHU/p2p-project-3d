import { MirrorTexture as BabylonMirrorTexture, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IRenderTargetTextureInitial, buildExtends as _buildExtends } from './RenderTargetTexture';

export type IMirrorTextureInitial<T> = IRenderTargetTextureInitial<T> & {
    scene: BabylonScene
}
export type IMirrorTextureProps = IMirrorTextureInitial<BabylonMirrorTexture>;

function MirrorTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IMirrorTextureProps) => {
        const { scene, instance, name, size, generateMipMaps, type, samplingMode, generateDepthBuffer } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonMirrorTexture(name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer );
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MirrorTextureHOC(e));
}

export const P2PMirrorTexture = buildExtends<IMirrorTextureProps>(ChildHOC(null));
    
export type IMirrorTextureOptions = {};