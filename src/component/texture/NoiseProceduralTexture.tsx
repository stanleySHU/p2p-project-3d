import { NoiseProceduralTexture as BabylonNoiseProceduralTexture, Texture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { IProceduralTextureInitial, buildExtends as _buildExtends } from './ProceduralTexture';

export type INoiseProceduralTextureInitial<T> = IProceduralTextureInitial<T> & {
    name: string,
    size?: number, 
    fallbackTexture?: Texture
}
export type INoiseProceduralTextureProps = INoiseProceduralTextureInitial<BabylonNoiseProceduralTexture>;

function NoiseProceduralTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & INoiseProceduralTextureProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, size, fallbackTexture, generateMipMaps } = props;

        useEffect(() => {
            console.log(`NoiseProceduralTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonNoiseProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) ;
                console.log(`NoiseProceduralTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(NoiseProceduralTextureHOC(e));
}

export const P2PNoiseProceduralTexture = buildExtends<INoiseProceduralTextureProps>(ChildHOC(null));
    
export type INoiseProceduralTextureOptions = {};