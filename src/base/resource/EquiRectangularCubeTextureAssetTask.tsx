import { EquiRectangularCubeTextureAssetTask as BabylonEquiRectangularCubeTextureAssetTask } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
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
        const { name, instance, url, size, noMipmap, gammaSpace } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonEquiRectangularCubeTextureAssetTask(name, url, size, noMipmap, gammaSpace);
            }
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(EquiRectangularCubeTextureAssetTaskHOC(e));
}

export const P2PEquiRectangularCubeTextureAssetTask = buildExtends<IEquiRectangularCubeTextureAssetTaskProps>(ChildHOC(null));