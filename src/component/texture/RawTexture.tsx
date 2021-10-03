import { RawTexture as BabylonRawTexture} from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { EngineContext } from '../Engine';
import { ITextureInitial, buildExtends as _buildExtends } from './Texture';

export type IRawTextureInitial<T> = ITextureInitial<T> & {
    data: ArrayBufferView, 
    width: number, 
    height: number, 
    format: number, 
    generateMipMaps?: boolean,     
    type?: number
}
export type IRawTextureProps = IRawTextureInitial<BabylonRawTexture>;

function RawTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRawTextureProps) => {
        const { engine } = useContext(EngineContext);
        const { instance, name, data, width, height, format, generateMipMaps, invertY, samplingMode, type } = props;

        useEffect(() => {
            console.log(`RawTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonRawTexture(data, width, height, format, engine!, generateMipMaps, invertY, samplingMode, type);
                console.log(`RawTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawTextureHOC(e));
}

export const P2PRawTexture = buildExtends<IRawTextureProps>(ChildHOC(null));
    
export type IRawTextureOptions = {};