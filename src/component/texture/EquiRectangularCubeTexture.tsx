import { EquiRectangularCubeTexture as BabylonEquiRectangularCubeTexture } from '@babylonjs/core';
import React, { useContext, useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { ChildHOC } from '../Component';
import { SceneContext } from '../scene/Scene';
import { IBaseTextureInitial, buildExtends as _buildExtends } from './BaseTexture';

export type IEquiRectangularCubeTextureInitial<T> = IBaseTextureInitial<T> & {
    url: string, 
    size: number, 
    noMipmap?: boolean | undefined, 
    gammaSpace?: boolean | undefined, 
    onLoad?: Nullable<() => void> | undefined, 
    onError?: Nullable<any>
}
export type IEquiRectangularCubeTextureProps = IEquiRectangularCubeTextureInitial<BabylonEquiRectangularCubeTexture>;

function EquiRectangularCubeTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IEquiRectangularCubeTextureProps) => {
        const { scene } = useContext(SceneContext);
        const { instance, name, url, size, noMipmap, gammaSpace, onLoad, onError} = props;

        useEffect(() => {
            console.log(`EquiRectangularCubeTexture ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonEquiRectangularCubeTexture(url, scene!, size, noMipmap, gammaSpace, onLoad, onError);
                console.log(`EquiRectangularCubeTexture ${name} created`);
            }
        }, [])
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EquiRectangularCubeTextureHOC(e));
}

export const P2PEquiRectangularCubeTexture = buildExtends<IEquiRectangularCubeTextureProps>(ChildHOC(null));
    
export type IEquiRectangularCubeTextureOptions = {};