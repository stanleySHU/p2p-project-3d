import { RefractionTexture as BabylonRefractionTexture, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IRenderTargetTextureInitial, buildExtends as _buildExtends } from './RenderTargetTexture';

export type IRefractionTextureInitial<T> = IRenderTargetTextureInitial<T> & {
    scene: BabylonScene,
    size: number
}
export type IRefractionTextureProps = IRefractionTextureInitial<BabylonRefractionTexture>;

function RefractionTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRefractionTextureProps) => {
        const { scene, instance, name, size, generateMipMaps } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonRefractionTexture(name, size, scene, generateMipMaps);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RefractionTextureHOC(e));
}

export const P2PRefractionTexture = buildExtends<IRefractionTextureProps>(ChildHOC(null));
    
export type IRefractionTextureOptions = {};