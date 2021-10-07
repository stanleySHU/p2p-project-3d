import { Texture as BabylonTexture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { EngineContext } from '../Engine';
import { IBaseTextureInitial, buildExtends as _buildExtends } from './BaseTexture';

export type ITextureInitial<T> = IBaseTextureInitial<T> & {
    url: Nullable<string>, 
    noMipmap?: boolean, 
    invertY?: boolean, 
    samplingMode?: number, 
    onLoad?: Nullable<() => void>, 
    onError?: Nullable<(message?: string, exception?: any) => void>, 
    buffer?: Nullable<string | ArrayBuffer | ArrayBufferView | HTMLImageElement | Blob | ImageBitmap>, 
    deleteBuffer?: boolean, 
    format?: number, 
    mimeType?: string, 
    loaderOptions?: any
}
export type ITextureProps = ITextureInitial<BabylonTexture>;

function TextureHOC<T>(EL: React.FC<T>) {
    return (props: T & ITextureProps) => {
        const { engine } = useContext(EngineContext);
        const { instance, name, url, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format, mimeType, loaderOptions } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonTexture(url, engine!, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format, mimeType, loaderOptions);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TextureHOC(e));
}

export const P2PTexture = buildExtends<ITextureProps>(ChildHOC(null));
    
export type ITextureOptions = {};