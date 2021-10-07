import { RawTexture as BabylonRawTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './Texture'

export type IRawTextureProps = {
    data: Nullable<ArrayBufferView>, 
    width: number, 
    height: number, 
    format: number, 
    sceneOrEngine: Nullable<BabylonScene | ThinEngine>, 
    generateMipMaps?: boolean, 
    invertY?: boolean, 
    samplingMode?: number, 
    type?: number, 
    creationFlags?: number
}

export type IRawTextureParams = {

}

function RawTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRawTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawTextureHOC(e));
}

function _(props: IRawTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { data, width, height, format, sceneOrEngine, generateMipMaps, invertY, samplingMode, type, creationFlags } =  props;
    useEffect(() => {
        let obj = new BabylonRawTexture(data, width, height, format, sceneOrEngine, generateMipMaps, invertY, samplingMode, type, creationFlags);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PRawTexture = buildExtends<IRawTextureProps & IRawTextureParams>(_);