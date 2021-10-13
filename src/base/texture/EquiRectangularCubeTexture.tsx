import { EquiRectangularCubeTexture as BabylonEquiRectangularCubeTexture, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { ProceduralTextureHOC } from './ProceduralTexture';
import { TextureHOC } from './Texture';
import { ThinTextureHOC } from './ThinTexture';

export type IEquiRectangularCubeTextureProps = IComponentProps & {
    url: string, 
    scene: BabylonScene, 
    size: number, 
    noMipmap?: boolean, 
    gammaSpace?: boolean, 
    onLoad?: Nullable<() => void>,
    onError?: Nullable<(message?: string, exception?: any) => void>
}

export type IEquiRectangularCubeTextureParams = {

}

function EquiRectangularCubeTextureHOC(EL: React.FC) {
    return (props: IEquiRectangularCubeTextureParams) => {
        return <EL {...props}/>
    }
}

function _(props: IEquiRectangularCubeTextureProps) {
    const { init, url, scene, size, noMipmap, gammaSpace, onLoad, onError } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonEquiRectangularCubeTexture(url, scene, size, noMipmap, gammaSpace, onLoad, onError );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PEquiRectangularCubeTexture = getEL<IEquiRectangularCubeTextureParams>(_, [
    EquiRectangularCubeTextureHOC,
    ProceduralTextureHOC,
    TextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);