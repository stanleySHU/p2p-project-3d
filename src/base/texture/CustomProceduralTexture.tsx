import { CustomProceduralTexture as BabylonCustomProceduralTexture, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './ProceduralTexture'

export type ICustomProceduralTextureProps = {
    name: string, 
    texturePath: string, 
    size: number, 
    scene: BabylonScene, 
    fallbackTexture?: Texture, 
    generateMipMaps?: boolean
}

export type ICustomProceduralTextureParams = {

}

function CustomProceduralTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & ICustomProceduralTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CustomProceduralTextureHOC(e));
}

function _(props: ICustomProceduralTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, texturePath, size, scene, fallbackTexture, generateMipMaps} =  props;
    useEffect(() => {
        let obj = new BabylonCustomProceduralTexture(name, texturePath, size, scene, fallbackTexture, generateMipMaps);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PCustomProceduralTexture = buildExtends<ICustomProceduralTextureProps & ICustomProceduralTextureParams>(_);