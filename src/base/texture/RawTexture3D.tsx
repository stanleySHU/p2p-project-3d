import { RawTexture3D as BabylonRawTexture3D, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './Texture'

export type IRawTexture3DProps = {
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

function RawTexture3DHOC<T>(EL: React.FC<T>) {
    return (props: T & IRawTexture3DParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawTexture3DHOC(e));
}

function _(props: IRawTexture3DProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType } =  props;
    useEffect(() => {
        let obj = new BabylonRawTexture3D(data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PRawTexture3D = buildExtends<IRawTexture3DProps & IRawTexture3DParams>(_);