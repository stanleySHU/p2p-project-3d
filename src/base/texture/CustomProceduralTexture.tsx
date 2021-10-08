import { CustomProceduralTexture as BabylonCustomProceduralTexture, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './ProceduralTexture'

export type ICustomProceduralTextureProps = IComponentProps<BabylonCustomProceduralTexture> & {
    name: string, 
    texturePath: string, 
    size: number, 
    scene: BabylonScene, 
    fallbackTexture?: Texture, 
    generateMipMaps?: boolean
}

export type ICustomProceduralTextureParams = {}

function CustomProceduralTextureHOC(EL: React.FC) {
    return (props: ICustomProceduralTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CustomProceduralTextureHOC(e));
}

function _(props: ICustomProceduralTextureProps) {
    const { instance, name, texturePath, size, scene, fallbackTexture, generateMipMaps} =  props;
    useEffect(() => {
        instance!.current = new BabylonCustomProceduralTexture(name, texturePath, size, scene, fallbackTexture, generateMipMaps);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCustomProceduralTexture = buildExtends<ICustomProceduralTextureProps & ICustomProceduralTextureParams>(_);