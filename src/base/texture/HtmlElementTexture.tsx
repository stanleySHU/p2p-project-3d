import { HtmlElementTexture as BabylonHtmlElementTexture, IHtmlElementTextureOptions, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './BaseTexture'

export type IHtmlElementTextureProps = IComponentProps<BabylonHtmlElementTexture> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HtmlElementTextureHOC(e));
}

function _(props: IHtmlElementTextureProps) {
    const { instance, name, element, options } =  props;
    useEffect(() => {
        instance!.current = new BabylonHtmlElementTexture(name, element, options);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PHtmlElementTexture = buildExtends<IHtmlElementTextureProps & IHtmlElementTextureParams>(_);