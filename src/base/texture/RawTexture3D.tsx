import { RawTexture3D as BabylonRawTexture3D, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './Texture'

export type IRawTexture3DProps = IComponentProps<BabylonRawTexture3D> & {
    data: ArrayBufferView, 
    width: number, 
    height: number, 
    depth: number, 
    format: number, 
    scene: BabylonScene, 
    generateMipMaps?: boolean, 
    invertY?: boolean, 
    samplingMode?: number, 
    textureType?: number
}

export type IRawTexture3DParams = {

}

function RawTexture3DHOC(EL: React.FC) {
    return (props: IRawTexture3DParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawTexture3DHOC(e));
}

function _(props: IRawTexture3DProps) {
    const { init, data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRawTexture3D(data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRawTexture3D = buildExtends<IRawTexture3DProps & IRawTexture3DParams>(_);