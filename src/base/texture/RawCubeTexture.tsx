import { RawCubeTexture as BabylonRawCubeTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './CubeTexture'

export type IRawCubeTextureProps = {
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

function RawCubeTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRawCubeTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RawCubeTextureHOC(e));
}

function _(props: IRawCubeTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { scene, data, size, format, type, generateMipMaps, invertY, samplingMode, compression } =  props;
    useEffect(() => {
        let obj = new BabylonRawCubeTexture(scene, data, size, format, type, generateMipMaps, invertY, samplingMode, compression);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PRawCubeTexture = buildExtends<IRawCubeTextureProps & IRawCubeTextureParams>(_);