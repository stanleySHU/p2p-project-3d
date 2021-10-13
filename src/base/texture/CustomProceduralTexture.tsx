import { CustomProceduralTexture as BabylonCustomProceduralTexture, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { ProceduralTextureHOC } from './ProceduralTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type ICustomProceduralTextureProps = IComponentProps & {
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

function _(props: ICustomProceduralTextureProps) {
    const { init, name, texturePath, size, scene, fallbackTexture, generateMipMaps} =  props;
    useLayoutEffect(() => {
        let obj = new BabylonCustomProceduralTexture(name, texturePath, size, scene, fallbackTexture, generateMipMaps);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PCustomProceduralTexture = getEL<ICustomProceduralTextureParams>(_, [
    CustomProceduralTextureHOC,
    ProceduralTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);