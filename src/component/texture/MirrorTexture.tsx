import { MirrorTexture as BabylonMirrorTexture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IRenderTargetTextureInitial, buildExtends as _buildExtends } from './RenderTargetTexture';

export type IMirrorTextureInitial<T> = IRenderTargetTextureInitial<T> & {}
export type IMirrorTextureProps = IMirrorTextureInitial<BabylonMirrorTexture>;

function MirrorTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IMirrorTextureProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, size, generateMipMaps, type, samplingMode, generateDepthBuffer } = props;

        useEffect(() => {
            console.log(`MirrorTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonMirrorTexture(name, size, scene!, generateMipMaps, type, samplingMode, generateDepthBuffer );
                console.log(`MirrorTexture ${name} created`);
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