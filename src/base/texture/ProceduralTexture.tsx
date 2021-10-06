import { ProceduralTexture as BabylonProceduralTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { ITextureInitial, buildExtends as _buildExtends } from './Texture';

export type IProceduralTextureInitial<T> = ITextureInitial<T> & {
    scene: Nullable<BabylonScene>,
    name: string,
    size: RenderTargetTextureSize, 
    fragment: any,  
    fallbackTexture?: Nullable<Texture>, 
    generateMipMaps?: boolean, 
    isCube?: boolean, 
    textureType?: number
}
export type IProceduralTextureProps = IProceduralTextureInitial<BabylonProceduralTexture>;

function ProceduralTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IProceduralTextureProps) => {
        const { scene, instance, name, size, fragment, fallbackTexture, generateMipMaps, isCube, textureType } = props;

        useEffect(() => {
            console.log(`ProceduralTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonProceduralTexture(name, size, fragment, scene, fallbackTexture, generateMipMaps, isCube, textureType);
                console.log(`ProceduralTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ProceduralTextureHOC(e));
}

export const P2PProceduralTexture = buildExtends<IProceduralTextureProps>(ChildHOC(null));
    
export type IProceduralTextureOptions = {};