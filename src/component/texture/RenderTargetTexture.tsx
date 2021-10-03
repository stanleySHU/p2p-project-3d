import { RenderTargetTexture as BabylonRenderTargetTexture } from '@babylonjs/core'; 
import React, { useContext, useEffect } from 'react';
import { ChildHOC } from '../Component';
import { SceneContext } from '../Scene';
import { ITextureInitial, buildExtends as _buildExtends } from './Texture';

export type IRenderTargetTextureInitial<T> = ITextureInitial<T> & {
    name: string, size: number | {
        width: number;
        height: number;
        layers?: number;
    } | {
        ratio: number;
    }, generateMipMaps?: boolean, doNotChangeAspectRatio?: boolean, type?: number, isCube?: boolean, samplingMode?: number, generateDepthBuffer?: boolean, generateStencilBuffer?: boolean, isMulti?: boolean, format?: number, delayAllocation?: boolean
}
export type IRenderTargetTextureProps = IRenderTargetTextureInitial<BabylonRenderTargetTexture>;

function RenderTargetTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRenderTargetTextureProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, size, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format, delayAllocation } = props;

        useEffect(() => {
            console.log(`RenderTargetTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonRenderTargetTexture(name, size, scene!, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format, delayAllocation);
                console.log(`RenderTargetTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RenderTargetTextureHOC(e));
}

export const P2PRenderTargetTexture = buildExtends<IRenderTargetTextureProps>(ChildHOC(null));
    
export type IRenderTargetTextureOptions = {};