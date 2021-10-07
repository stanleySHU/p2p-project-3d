import { CubeTexture as BabylonCubeTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './BaseTexture'

export type ICubeTextureProps = {
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

export type ICubeTextureParams = {

}

function CubeTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & ICubeTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CubeTextureHOC(e));
}

function _(props: ICubeTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { rootUrl, sceneOrEngine, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset, loaderOptions, useSRGBBuffer } =  props;
    useEffect(() => {
        let obj = new BabylonCubeTexture(rootUrl, sceneOrEngine, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset, loaderOptions, useSRGBBuffer);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PCubeTexture = buildExtends<ICubeTextureProps & ICubeTextureParams>(_);