import { EquiRectangularCubeTexture as BabylonEquiRectangularCubeTexture, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { IComponentProps, P2PChildren } from '../Component';
import { buildExtends as _buildExtends } from './BaseTexture'

export type IEquiRectangularCubeTextureProps = IComponentProps<BabylonEquiRectangularCubeTexture> & {
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

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EquiRectangularCubeTextureHOC(e));
}

function _(props: IEquiRectangularCubeTextureProps) {
    const { init, url, scene, size, noMipmap, gammaSpace, onLoad, onError } =  props;
    useLayoutEffect(() => {
        let obj = new BabylonEquiRectangularCubeTexture(url, scene, size, noMipmap, gammaSpace, onLoad, onError );
        init!(obj);
    }, []);
    return <P2PChildren {...props}/>;
}

export const P2PEquiRectangularCubeTexture = buildExtends<IEquiRectangularCubeTextureProps & IEquiRectangularCubeTextureParams>(_);