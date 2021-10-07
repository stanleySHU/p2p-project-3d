import { HDRCubeTextureAssetTask as BabylonHDRCubeTextureAssetTask } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type IHDRCubeTextureAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    url: string, 
    size: number, 
    noMipmap?: boolean, 
    generateHarmonics?: boolean, 
    gammaSpace?: boolean, 
    reserved?: boolean
};
export type IHDRCubeTextureAssetTaskProps = IHDRCubeTextureAssetTaskInitial<BabylonHDRCubeTextureAssetTask>;

function HDRCubeTextureAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & IHDRCubeTextureAssetTaskProps) => {
        const { name, instance, url, size, noMipmap, generateHarmonics, gammaSpace, reserved } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonHDRCubeTextureAssetTask(name, url, size, noMipmap, generateHarmonics, gammaSpace, reserved);
            }
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(HDRCubeTextureAssetTaskHOC(e));
}

export const P2PHDRCubeTextureAssetTask = buildExtends<IHDRCubeTextureAssetTaskProps>(ChildHOC(null));