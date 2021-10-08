import { IMultiRenderTargetOptions, MultiRenderTarget as BabylonMultiRenderTarget, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './RenderTargetTexture'

export type IMultiRenderTargetProps = IComponentProps<BabylonMultiRenderTarget> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiRenderTargetHOC(e));
}

function _(props: IMultiRenderTargetProps) {
    const { instance, name, size, count, scene, options, textureNames } =  props;
    useEffect(() => {
        instance!.current = new BabylonMultiRenderTarget( name, size, count, scene, options, textureNames);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PMultiRenderTarget = buildExtends<IMultiRenderTargetProps & IMultiRenderTargetParams>(_);