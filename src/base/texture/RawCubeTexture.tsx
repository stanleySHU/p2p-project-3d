import { RawCubeTexture as BabylonRawCubeTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { ThinTextureHOC } from './ThinTexture';

export type IRawCubeTextureProps = IComponentProps & {
    scene: BabylonScene, 
    data: Nullable<ArrayBufferView[]>, 
    size: number, 
    format?: number, 
    type?: number, 
    generateMipMaps?: boolean, 
    invertY?: boolean, 
    samplingMode?: number, 
    compression?: Nullable<string>
}

export type IRawCubeTextureParams = {

}

function RawCubeTextureHOC(EL: React.FC) {
    return (props: IRawCubeTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IRawCubeTextureProps) {
    const { init, scene, data, size, format, type, generateMipMaps, invertY, samplingMode, compression } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRawCubeTexture(scene, data, size, format, type, generateMipMaps, invertY, samplingMode, compression);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRawCubeTexture = getEL<IRawCubeTextureParams>(_, [
    RawCubeTextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);