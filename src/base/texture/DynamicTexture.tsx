import { DynamicTexture as BabylonDynamicTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IDynamicTextureProps = IComponentProps &{
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

export function DynamicTextureHOC(EL: React.FC) {
    return (props: IDynamicTextureParams) => {
        return <EL {...props}/>
    }
}

function _(props: IDynamicTextureProps) {
    const { init, name, options, scene, generateMipMaps, samplingMode, format, invertY } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonDynamicTexture(name, options, scene, generateMipMaps, samplingMode, format, invertY);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PDynamicTexture = getEL<IDynamicTextureParams>(_, [
    DynamicTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);

