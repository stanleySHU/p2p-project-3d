import { ColorGradingTexture as BabylonColorGradingTexture, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { ThinTextureHOC } from './ThinTexture';

export type IColorGradingTextureProps = IComponentProps & {
    url: string, 
    sceneOrEngine: BabylonScene | ThinEngine, 
    onLoad?: Nullable<() => void>
}

export type IColorGradingTextureParams = {}

function ColorGradingTextureHOC(EL: React.FC) {
    return (props: IColorGradingTextureParams) => {
        return <EL {...props}/>
    }
}

function _(props: IColorGradingTextureProps) {
    const { init, url, sceneOrEngine, onLoad } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonColorGradingTexture(url, sceneOrEngine, onLoad);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PColorGradingTexture = getEL<IColorGradingTextureParams>(_, [
    ColorGradingTextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);