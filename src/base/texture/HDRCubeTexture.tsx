import { HDRCubeTexture as BabylonHDRCubeTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './BaseTexture'

export type IHDRCubeTextureProps = {
    url: string, 
    sceneOrEngine: BabylonScene | ThinEngine, 
    size: number, 
    noMipmap?: boolean, 
    generateHarmonics?: boolean, 
    gammaSpace?: boolean, 
    prefilterOnLoad?: boolean, 
    onLoad?: Nullable<() => void>, 
    onError?: Nullable<(message?: string, exception?: any) => void>
}

export type IHDRCubeTextureParams = {

}

function HDRCubeTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IHDRCubeTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HDRCubeTextureHOC(e));
}

function _(props: IHDRCubeTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { url, sceneOrEngine, size, noMipmap, generateHarmonics, gammaSpace, prefilterOnLoad, onLoad, onError } =  props;
    useEffect(() => {
        let obj = new BabylonHDRCubeTexture(url, sceneOrEngine, size, noMipmap, generateHarmonics, gammaSpace, prefilterOnLoad, onLoad, onError);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PHDRCubeTexture = buildExtends<IHDRCubeTextureProps & IHDRCubeTextureParams>(_);