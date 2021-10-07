import { IMultiRenderTargetOptions, MultiRenderTarget as BabylonMultiRenderTarget, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IRenderTargetTextureInitial, buildExtends as _buildExtends } from './RenderTargetTexture';

export type IMultiRenderTargetInitial<T> = IRenderTargetTextureInitial<T> & {
    scene: BabylonScene,
    count: number,
    options?: IMultiRenderTargetOptions | undefined
}
export type IMultiRenderTargetProps = IMultiRenderTargetInitial<BabylonMultiRenderTarget>;

function MultiRenderTargetHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiRenderTargetProps) => {
        const { scene, instance, name, size, count, options } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonMultiRenderTarget(name, size, count, scene, options );
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiRenderTargetHOC(e));
}

export const P2PMultiRenderTarget = buildExtends<IMultiRenderTargetProps>(ChildHOC(null));
    
