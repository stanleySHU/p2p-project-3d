import { RawTexture3D as BabylonRawTexture3D } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { ITextureInitial, buildExtends as _buildExtends } from './Texture';

export type IRawTexture3DInitial<T> = ITextureInitial<T> & {
    data: ArrayBufferView, 
    width: number, 
    height: number, 
    depth: number, 
    format: number, 
    generateMipMaps?: boolean,     
    textureType?: number
}
export type IRawTexture3DProps = IRawTexture3DInitial<BabylonRawTexture3D>;

function RawTexture3DHOC<T>(EL: React.FC<T>) {
    return (props: T & IRawTexture3DProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, data, width, height, depth, format, generateMipMaps, invertY, samplingMode, textureType} = props;

        useEffect(() => {
            console.log(`RawTexture3D ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonRawTexture3D(data, width, height, depth, format, scene!, generateMipMaps, invertY, samplingMode, textureType);
                console.log(`RawTexture3D ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawTexture3DHOC(e));
}

export const P2PRawTexture3D = buildExtends<IRawTexture3DProps>(ChildHOC(null));
    
export type IRawTexture3DOptions = {};