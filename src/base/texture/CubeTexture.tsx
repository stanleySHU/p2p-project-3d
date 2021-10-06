import { CubeTexture as BabylonCubeTexture } from '@babylonjs/core'; 
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { EngineContext } from '../Engine';
import { IBaseTextureInitial, buildExtends as _buildExtends } from './BaseTexture';

export type ICubeTextureInitial<T> = IBaseTextureInitial<T> & {
    rootUrl: string, 
    extensions?: Nullable<string[]>, 
    noMipmap?: boolean, 
    files?: Nullable<string[]>, 
    onLoad?: Nullable<() => void>, 
    onError?: Nullable<(message?: string, exception?: any) => void>, 
    format?: number, 
    prefiltered?: boolean, 
    forcedExtension?: any, 
    createPolynomials?: boolean, 
    lodScale?: number, 
    lodOffset?: number, 
    loaderOptions?: any
}
export type ICubeTextureProps = ICubeTextureInitial<BabylonCubeTexture>;

function CubeTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & ICubeTextureProps) => {
        const { engine } = useContext(EngineContext);
        const { instance, name, rootUrl, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset, loaderOptions } = props;

        useEffect(() => {
            console.log(`CubeTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonCubeTexture(rootUrl, engine!, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension, createPolynomials, lodScale, lodOffset, loaderOptions);
                console.log(`CubeTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CubeTextureHOC(e));
}

export const P2PCubeTexture = buildExtends<ICubeTextureProps>(ChildHOC(null));
    
export type ICubeTextureOptions = {};