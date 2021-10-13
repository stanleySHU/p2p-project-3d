import { EquiRectangularCubeTextureAssetTask as BabylonEquiRectangularCubeTextureAssetTask } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type IEquiRectangularCubeTextureAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    url: string, 
    size: number, 
    noMipmap?: boolean, 
    gammaSpace?: boolean
};
export type IEquiRectangularCubeTextureAssetTaskProps = IEquiRectangularCubeTextureAssetTaskInitial<BabylonEquiRectangularCubeTextureAssetTask>;

function EquiRectangularCubeTextureAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & IEquiRectangularCubeTextureAssetTaskProps) => {
        const { init, name, url, size, noMipmap, gammaSpace } = props;

        useLayoutEffect(() => {
            let obj = new BabylonEquiRectangularCubeTextureAssetTask(name, url, size, noMipmap, gammaSpace);
            init!(obj);
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EquiRectangularCubeTextureAssetTaskHOC(e));
}

export const P2PEquiRectangularCubeTextureAssetTask = buildExtends<IEquiRectangularCubeTextureAssetTaskProps>(null);