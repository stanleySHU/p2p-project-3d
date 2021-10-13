import { RefractionTexture as BabylonRefractionTexture, RenderTargetTextureSize, Scene as BabylonScene, Texture, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { RenderTargetTextureHOC } from './RenderTargetTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IRefractionTextureProps = IComponentProps & {
    name: string, 
    size: number, 
    scene: BabylonScene, 
    generateMipMaps?: boolean
}

export type IRefractionTextureParams = {

}

function RefractionTextureHOC(EL: React.FC) {
    return (props: IRefractionTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

function _(props: IRefractionTextureProps) {
    const { init, name, size, scene, generateMipMaps } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonRefractionTexture(name, size, scene, generateMipMaps);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PRefractionTexture = getEL<IRefractionTextureParams>(_, [
    RefractionTextureHOC,
    RenderTargetTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);