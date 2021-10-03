import { RawCubeTexture as BabylonRawCubeTexture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { ICubeTextureInitial, buildExtends as _buildExtends } from './CubeTexture';

export type IRawCubeTextureInitial<T> = ICubeTextureInitial<T> & {
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
        const { scene } = useContext(SceneContext);
        const { instance, name, data, size, format, type, generateMipMaps, invertY, samplingMode, ompression } = props;

        useEffect(() => {
            console.log(`RawCubeTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonRawCubeTexture(scene!, data, size, format, type, generateMipMaps, invertY, samplingMode, ompression );
                console.log(`RawCubeTexture ${name} created`);
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