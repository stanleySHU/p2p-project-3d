import { Texture as BabylonTexture, Scene as BabylonScene, ThinEngine, ITextureCreationOptions } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './BaseTexture'

export type ITextureProps = IComponentProps<BabylonTexture> & {
    url: Nullable<string>, 
    sceneOrEngine: Nullable<BabylonScene | ThinEngine>, 
    noMipmapOrOptions?: boolean | ITextureCreationOptions, 
    invertY?: boolean, 
    samplingMode?: number, 
    onLoad?: Nullable<() => void>, 
    onError?: Nullable<(message?: string, exception?: any) => void>, 
    buffer?: Nullable<string | ArrayBuffer | ArrayBufferView | HTMLImageElement | Blob | ImageBitmap>, 
    deleteBuffer?: boolean, 
    format?: number, 
    mimeType?: string, 
    loaderOptions?: any, 
    creationFlags?: number
}

export type ITextureParams = {

}

function TextureHOC(EL: React.FC) {
    return (props: ITextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TextureHOC(e));
}

function _(props: ITextureProps) {
    const { instance, url, sceneOrEngine, noMipmapOrOptions, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format, mimeType, loaderOptions, creationFlags } =  props;
    useEffect(() => {
        instance!.current = new BabylonTexture(url, sceneOrEngine, noMipmapOrOptions, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format, mimeType, loaderOptions, creationFlags);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTexture = buildExtends<ITextureProps & ITextureParams>(_);