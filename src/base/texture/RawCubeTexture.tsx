import { RawCubeTexture as BabylonRawCubeTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './CubeTexture'

export type IRawCubeTextureProps = IComponentProps<BabylonRawCubeTexture> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawCubeTextureHOC(e));
}

function _(props: IRawCubeTextureProps) {
    const { init, scene, data, size, format, type, generateMipMaps, invertY, samplingMode, compression } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRawCubeTexture(scene, data, size, format, type, generateMipMaps, invertY, samplingMode, compression);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRawCubeTexture = buildExtends<IRawCubeTextureProps & IRawCubeTextureParams>(_);