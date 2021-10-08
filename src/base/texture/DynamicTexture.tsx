import { DynamicTexture as BabylonDynamicTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
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
    const { instance, name, options, scene, generateMipMaps, samplingMode, format, invertY } =  props;
    useEffect(() => {
        instance!.current = new BabylonDynamicTexture(name, options, scene, generateMipMaps, samplingMode, format, invertY);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDynamicTexture = buildExtends<IDynamicTextureProps & IDynamicTextureParams>(_);