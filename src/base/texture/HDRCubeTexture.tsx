import { HDRCubeTexture as BabylonHDRCubeTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { ThinTextureHOC } from './ThinTexture';

export type IHDRCubeTextureProps = IComponentProps & {
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

function HDRCubeTextureHOC(EL: React.FC) {
    return (props: IHDRCubeTextureParams) => {
        return <EL {...props}/>
    }
}

function _(props: IHDRCubeTextureProps) {
    const { init, url, sceneOrEngine, size, noMipmap, generateHarmonics, gammaSpace, prefilterOnLoad, onLoad, onError } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonHDRCubeTexture(url, sceneOrEngine, size, noMipmap, generateHarmonics, gammaSpace, prefilterOnLoad, onLoad, onError);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PHDRCubeTexture = getEL<IHDRCubeTextureParams>(_, [
    HDRCubeTextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);