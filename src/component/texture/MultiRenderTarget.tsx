import { IMultiRenderTargetOptions, MultiRenderTarget as BabylonMultiRenderTarget } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { IRenderTargetTextureInitial, buildExtends as _buildExtends } from './RenderTargetTexture';

export type IMultiRenderTargetInitial<T> = IRenderTargetTextureInitial<T> & {
    count: number,
    options?: IMultiRenderTargetOptions | undefined
}
export type IMultiRenderTargetProps = IMultiRenderTargetInitial<BabylonMultiRenderTarget>;

function MultiRenderTargetHOC<T>(EL: React.FC<T>) {
    return (props: T & IMultiRenderTargetProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, size, count, options } = props;

        useEffect(() => {
            console.log(`MultiRenderTarget ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonMultiRenderTarget(name, size, count, scene!, options );
                console.log(`MultiRenderTarget ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MultiRenderTargetHOC(e));
}

export const P2PMultiRenderTarget = buildExtends<IMultiRenderTargetProps>(ChildHOC(null));
    
