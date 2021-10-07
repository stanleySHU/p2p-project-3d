import { CustomProceduralTexture as BabylonCustomProceduralTexture, Scene as BabylonScene,Texture } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IProceduralTextureInitial, buildExtends as _buildExtends } from './ProceduralTexture';

export type ICustomProceduralTextureInitial<T> = IProceduralTextureInitial<T> & {
    scene: BabylonScene,
    name: string,
    texturePath: string, 
    size: number, 
    fallbackTexture?: Texture
}
export type ICustomProceduralTextureProps = ICustomProceduralTextureInitial<BabylonCustomProceduralTexture>;

function CustomProceduralTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & ICustomProceduralTextureProps) => {
        const { scene, instance, name, texturePath, size, fallbackTexture, generateMipMaps } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonCustomProceduralTexture(name, texturePath, size, scene, fallbackTexture, generateMipMaps);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CustomProceduralTextureHOC(e));
}

export const P2PCustomProceduralTexture = buildExtends<ICustomProceduralTextureProps>(ChildHOC(null));
    
export type ICustomProceduralTextureOptions = {};