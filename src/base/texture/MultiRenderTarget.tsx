import { IMultiRenderTargetOptions, MultiRenderTarget as BabylonMultiRenderTarget, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './RenderTargetTexture'

export type IMultiRenderTargetProps = {
    name: string, 
    size: any, 
    count: number, 
    scene: BabylonScene, 
    options?: IMultiRenderTargetOptions, 
    textureNames?: string[]
}

export type IMultiRenderTargetParams = {

}

function MultiRenderTargetHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiRenderTargetParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiRenderTargetHOC(e));
}

function _(props: IMultiRenderTargetProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, size, count, scene, options, textureNames } =  props;
    useEffect(() => {
        let obj = new BabylonMultiRenderTarget( name, size, count, scene, options, textureNames);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PMultiRenderTarget = buildExtends<IMultiRenderTargetProps & IMultiRenderTargetParams>(_);