import { RawTexture2DArray as BabylonRawTexture2DArray, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { ITextureInitial, buildExtends as _buildExtends } from './Texture';

export type IRawTexture2DArrayInitial<T> = ITextureInitial<T> & {
    scene: BabylonScene,
    data: ArrayBufferView, 
    width: number, 
    height: number, 
    depth: number, 
    format: number, 
    generateMipMaps?: boolean,     
    textureType?: number
}
export type IRawTexture2DArrayProps = IRawTexture2DArrayInitial<BabylonRawTexture2DArray>;

function RawTexture2DArrayHOC<T>(EL: React.FC<T>) {
    return (props: T & IRawTexture2DArrayProps) => {
        const { scene, instance, name, data, width, height, depth, format, generateMipMaps, invertY, samplingMode, textureType} = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonRawTexture2DArray(data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawTexture2DArrayHOC(e));
}

export const P2PRawTexture2DArray = buildExtends<IRawTexture2DArrayProps>(ChildHOC(null));
    
export type IRawTexture2DArrayOptions = {};