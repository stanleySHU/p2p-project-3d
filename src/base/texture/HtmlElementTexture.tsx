import { HtmlElementTexture as BabylonHtmlElementTexture, IHtmlElementTextureOptions, Scene as BabylonScene, ThinEngine } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './BaseTexture'

export type IHtmlElementTextureProps = {
    name: string, 
    element: HTMLVideoElement | HTMLCanvasElement, 
    options: IHtmlElementTextureOptions
}

export type IHtmlElementTextureParams = {

}

function HtmlElementTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IHtmlElementTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HtmlElementTextureHOC(e));
}

function _(props: IHtmlElementTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { name, element, options } =  props;
    useEffect(() => {
        let obj = new BabylonHtmlElementTexture(name, element, options);
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PHtmlElementTexture = buildExtends<IHtmlElementTextureProps & IHtmlElementTextureParams>(_);