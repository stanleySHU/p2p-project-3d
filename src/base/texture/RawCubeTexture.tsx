import { RawCubeTexture as BabylonRawCubeTexture, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { ICubeTextureInitial, buildExtends as _buildExtends } from './CubeTexture';

export type IRawCubeTextureInitial<T> = ICubeTextureInitial<T> & {
    scene: BabylonScene,
    data: Nullable<ArrayBufferView[]>, 
    size: number, 
    format?: number | undefined, 
    type?: number | undefined, 
    generateMipMaps?: boolean | undefined, 
    invertY?: boolean | undefined,
    samplingMode?: number | undefined, 
    ompression?: Nullable<any>
}
export type IRawCubeTextureProps = IRawCubeTextureInitial<BabylonRawCubeTexture>;

function RawCubeTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRawCubeTextureProps) => {
        const { scene, instance, name, data, size, format, type, generateMipMaps, invertY, samplingMode, ompression } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonRawCubeTexture(scene, data, size, format, type, generateMipMaps, invertY, samplingMode, ompression );
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawCubeTextureHOC(e));
}

export const P2PRawCubeTexture = buildExtends<IRawCubeTextureProps>(ChildHOC(null));
    
export type IRawCubeTextureOptions = {};