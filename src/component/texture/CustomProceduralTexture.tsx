import { CustomProceduralTexture as BabylonCustomProceduralTexture, Texture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IProceduralTextureInitial, buildExtends as _buildExtends } from './ProceduralTexture';

export type ICustomProceduralTextureInitial<T> = IProceduralTextureInitial<T> & {
    texturePath: string, 
    size: number, 
    fallbackTexture?: Texture
}
export type ICustomProceduralTextureProps = ICustomProceduralTextureInitial<BabylonCustomProceduralTexture>;

function CustomProceduralTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & ICustomProceduralTextureProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, texturePath, size, fallbackTexture, generateMipMaps } = props;

        useEffect(() => {
            console.log(`CustomProceduralTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonCustomProceduralTexture(name, texturePath, size, scene!, fallbackTexture, generateMipMaps);
                console.log(`CustomProceduralTexture ${name} created`);
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