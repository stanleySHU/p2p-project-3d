import { IMultiRenderTargetOptions, MultiRenderTarget as BabylonMultiRenderTarget, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { RenderTargetTextureHOC } from './RenderTargetTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IMultiRenderTargetProps = IComponentProps & {
    name: string, 
    size: any, 
    count: number, 
    scene: BabylonScene, 
    options?: IMultiRenderTargetOptions, 
    textureNames?: string[]
}

export type IMultiRenderTargetParams = {

}

function MultiRenderTargetHOC(EL: React.FC) {
    return (props: IMultiRenderTargetParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IMultiRenderTargetProps) {
    const { init, name, size, count, scene, options, textureNames } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonMultiRenderTarget( name, size, count, scene, options, textureNames);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiRenderTarget = getEL<IMultiRenderTargetParams>(_, [
    MultiRenderTargetHOC,
    RenderTargetTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);