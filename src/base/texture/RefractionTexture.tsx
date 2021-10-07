import { RefractionTexture as BabylonRefractionTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './RenderTargetTexture'

export type IRefractionTextureProps = {
    name: string, 
    size: number, 
    scene: BabylonScene, 
    generateMipMaps?: boolean
}

export type IRefractionTextureParams = {

}

function RefractionTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IRefractionTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(RefractionTextureHOC(e));
}

function _(props: IRefractionTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, size, scene, generateMipMaps } =  props;
    useEffect(() => {
        let obj = new BabylonRefractionTexture(name, size, scene, generateMipMaps);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PRefractionTexture = buildExtends<IRefractionTextureProps & IRefractionTextureParams>(_);