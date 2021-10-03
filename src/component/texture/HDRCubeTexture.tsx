import { HDRCubeTexture as BabylonHDRCubeTexture, Scene, ThinEngine } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { EngineContext } from '../Engine';
import { IBaseTextureInitial, buildExtends as _buildExtends } from './BaseTexture';

export type IHDRCubeTextureInitial<T> = IBaseTextureInitial<T> & {
    url: string, 
    size: number, 
    noMipmap?: boolean | undefined, 
    generateHarmonics?: boolean | undefined, 
    gammaSpace?: boolean | undefined, 
    prefilterOnLoad?: boolean | undefined, 
    onLoad?: Nullable<any>, 
    onError?: Nullable<any>
}
export type IHDRCubeTextureProps = IHDRCubeTextureInitial<BabylonHDRCubeTexture>;

function HDRCubeTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IHDRCubeTextureProps) => {
        const { engine } = useContext(EngineContext);
        const { instance, name, url, size, noMipmap, generateHarmonics, gammaSpace, prefilterOnLoad, onLoad, onError } = props;

        useEffect(() => {
            console.log(`HDRCubeTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonHDRCubeTexture(url, engine!, size, noMipmap, generateHarmonics, gammaSpace, prefilterOnLoad, onLoad, onError);
                console.log(`HDRCubeTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HDRCubeTextureHOC(e));
}

export const P2PHDRCubeTexture = buildExtends<IHDRCubeTextureProps>(ChildHOC(null));
    
export type IHDRCubeTextureOptions = {};