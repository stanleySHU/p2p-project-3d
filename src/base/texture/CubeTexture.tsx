import { CubeTexture as BabylonCubeTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './BaseTexture'

export type ICubeTextureProps = IComponentProps<BabylonCubeTexture> & {
    rootUrl: string, 
    sceneOrEngine: BabylonScene | ThinEngine, 
    extensions?: Nullable<string[]>, 
    noMipmap?: boolean, 
    files?: Nullable<string[]>, 
    onLoad?: Nullable<() => void>, 
    onError?: Nullable<(message?: string, exception?: any) => void>, 
    format?: number, 
    prefiltered?: boolean, 
    forcedExtension?: any, 
    createPolynomials?: boolean, 
    lodScale?: number, 
    lodOffset?: number, 
    loaderOptions?: any, 
    useSRGBBuffer?: boolean
}

export type ICubeTextureParams = {}

function CubeTextureHOC(EL: React.FC) {
    return (props: ICubeTextureParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CubeTextureHOC(e));
}

function _(props: ICubeTextureProps) {
    const { init, rootUrl, sceneOrEngine, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset, loaderOptions, useSRGBBuffer } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonCubeTexture(rootUrl, sceneOrEngine, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset, loaderOptions, useSRGBBuffer);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCubeTexture = buildExtends<ICubeTextureProps & ICubeTextureParams>(_);