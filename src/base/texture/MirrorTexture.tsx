import { MirrorTexture as BabylonMirrorTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './RenderTargetTexture'

export type IMirrorTextureProps = {
    name: string, 
    size: number | {
        width: number;
        height: number;
    } | {
        ratio: number;
    }, 
    scene: BabylonScene, 
    generateMipMaps?: boolean, 
    type?: number, 
    samplingMode?: number, 
    generateDepthBuffer?: boolean
}

export type IMirrorTextureParams = {

}

function MirrorTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IMirrorTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MirrorTextureHOC(e));
}

function _(props: IMirrorTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer } =  props;
    useEffect(() => {
        let obj = new BabylonMirrorTexture( name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PMirrorTexture = buildExtends<IMirrorTextureProps & IMirrorTextureParams>(_);