import { HtmlElementTexture as BabylonHtmlElementTexture, IHtmlElementTextureOptions, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ComponentHOC, getEL, IComponentProps, P2PChildren } from '../Component';
import { BaseTextureHOC } from './BaseTexture';
import { ThinTextureHOC } from './ThinTexture';

export type IHtmlElementTextureProps = IComponentProps & {
    name: string, 
    element: HTMLVideoElement | HTMLCanvasElement, 
    options: IHtmlElementTextureOptions
}

export type IHtmlElementTextureParams = {

}

function HtmlElementTextureHOC(EL: React.FC) {
    return (props: IHtmlElementTextureParams) => {
        return <EL {...props}/>
    }
}

function _(props: IHtmlElementTextureProps) {
    const { init, name, element, options } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonHtmlElementTexture(name, element, options);
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PHtmlElementTexture = getEL<IHtmlElementTextureParams>(_, [
    HtmlElementTextureHOC,
    BaseTextureHOC,
    ThinTextureHOC,
    ComponentHOC
]);