import { RawTexture2DArray as BabylonRawTexture2DArray, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './Texture'

export type IRawTexture2DArrayProps = {
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

export type IRawTexture2DArrayParams = {

}

function RawTexture2DArrayHOC<T>(EL: React.FC<T>) {
    return (props: T & IRawTexture2DArrayParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawTexture2DArrayHOC(e));
}

function _(props: IRawTexture2DArrayProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType } =  props;
    useEffect(() => {
        let obj = new BabylonRawTexture2DArray(data, width, height, depth, format, scene, generateMipMaps, invertY, samplingMode, textureType);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PRawTexture2DArray = buildExtends<IRawTexture2DArrayProps & IRawTexture2DArrayParams>(_);