import { EquiRectangularCubeTexture as BabylonEquiRectangularCubeTexture, Scene as BabylonScene } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { Nullable } from '../../utils/customType';
import { buildExtends as _buildExtends } from './BaseTexture'

export type IEquiRectangularCubeTextureProps = {
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

function EquiRectangularCubeTextureHOC<T>(EL: React.FC<T>) {
    return (props: T & IEquiRectangularCubeTextureParams) => {
        useEffect(() => {

        });
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EquiRectangularCubeTextureHOC(e));
}

function _(props: IEquiRectangularCubeTextureProps) {
    // const [ state, dispatch ] = useReducer(reducer, initialState);
    const { url, scene, size, noMipmap, gammaSpace, onLoad, onError } =  props;
    useEffect(() => {
        let obj = new BabylonEquiRectangularCubeTexture(url, scene, size, noMipmap, gammaSpace, onLoad, onError );
        // dispatch(newChildren(obj));
    }, []);
    return null;
}

export const P2PEquiRectangularCubeTexture = buildExtends<IEquiRectangularCubeTextureProps & IEquiRectangularCubeTextureParams>(_);