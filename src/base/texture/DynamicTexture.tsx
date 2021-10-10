import { DynamicTexture as BabylonDynamicTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './Texture'

export type IDynamicTextureProps = IComponentProps<BabylonDynamicTexture> &{
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

function DynamicTextureHOC(EL: React.FC) {
    return (props: IDynamicTextureParams) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(DynamicTextureHOC(e));
}

function _(props: IDynamicTextureProps) {
    const { init, name, options, scene, generateMipMaps, samplingMode, format, invertY } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonDynamicTexture(name, options, scene, generateMipMaps, samplingMode, format, invertY);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDynamicTexture = buildExtends<IDynamicTextureProps & IDynamicTextureParams>(_);