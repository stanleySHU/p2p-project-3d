import { Texture as BabylonTexture, Scene as BabylonScene, ThinEngine, ITextureCreationOptions } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { ThinTextureHOC } from './ThinTexture';

export type ITextureProps = IComponentProps & {
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

export function TextureHOC(EL: React.FC) {
    return (props: ITextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: ITextureProps) {
    const { init, url, sceneOrEngine, noMipmapOrOptions, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format, mimeType, loaderOptions, creationFlags } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonTexture(url, sceneOrEngine, noMipmapOrOptions, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format, mimeType, loaderOptions, creationFlags);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PTexture = getEL<ITextureParams>(_, [
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);