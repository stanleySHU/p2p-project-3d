import { DynamicTexture as BabylonDynamicTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './Texture'

export type IDynamicTextureProps = {
    name: string, 
    options: any, 
    scene?: Nullable<BabylonScene>, 
    generateMipMaps?: boolean, 
    samplingMode?: number, 
    format?: number, 
    invertY?: boolean
}

export type IDynamicTextureParams = {

}

function DynamicTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IDynamicTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DynamicTextureHOC(e));
}

function _(props: IDynamicTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, options, scene, generateMipMaps, samplingMode, format, invertY } =  props;
    useEffect(() => {
        let obj = new BabylonDynamicTexture(name, options, scene, generateMipMaps, samplingMode, format, invertY);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PDynamicTexture = buildExtends<IDynamicTextureProps & IDynamicTextureParams>(_);