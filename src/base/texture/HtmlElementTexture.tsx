import { HtmlElementTexture as BabylonHtmlElementTexture, IHtmlElementTextureOptions } from '@babylonjs/core'; 
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IBaseTextureInitial, buildExtends as _buildExtends } from './BaseTexture';

export type IHtmlElementTextureInitial<T> = IBaseTextureInitial<T> & {
    name: string,
    element: HTMLVideoElement | HTMLCanvasElement, 
    options: IHtmlElementTextureOptions
}
export type IHtmlElementTextureProps = IHtmlElementTextureInitial<BabylonHtmlElementTexture>;

function HtmlElementTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IHtmlElementTextureProps) => {
        const { instance, name, element, options } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonHtmlElementTexture(name, element, options);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HtmlElementTextureHOC(e));
}

export const P2PHtmlElementTexture = buildExtends<IHtmlElementTextureProps>(ChildHOC(null));
    
