import { NoiseProceduralTexture as BabylonNoiseProceduralTexture, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './ProceduralTexture'

export type INoiseProceduralTextureProps = {
    name: string, 
    size?: number, 
    scene?: Nullable<BabylonScene>, 
    fallbackTexture?: Texture, 
    generateMipMaps?: boolean
}

export type INoiseProceduralTextureParams = {

}

function NoiseProceduralTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & INoiseProceduralTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(NoiseProceduralTextureHOC(e));
}

function _(props: INoiseProceduralTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, size, scene, fallbackTexture, generateMipMaps } =  props;
    useEffect(() => {
        let obj = new BabylonNoiseProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PNoiseProceduralTexture = buildExtends<INoiseProceduralTextureProps & INoiseProceduralTextureParams>(_);