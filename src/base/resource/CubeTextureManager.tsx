import { CubeTextureAssetTask as BabylonCubeTextureAssetTask } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type ICubeTextureAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    url: string, 
    extensions?: string[], 
    noMipmap?: boolean, 
    files?: string[], 
    prefiltered?: boolean
};
export type ICubeTextureAssetTaskProps = ICubeTextureAssetTaskInitial<BabylonCubeTextureAssetTask>;

function CubeTextureAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & ICubeTextureAssetTaskProps) => {
        const { init, name, url, extensions, noMipmap, files, prefiltered } = props;

        useEffect(() => {
            let obj = new BabylonCubeTextureAssetTask(name, url, extensions, noMipmap, files, prefiltered);
            init!(obj);
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(CubeTextureAssetTaskHOC(e));
}

export const P2PCubeTextureAssetTask = buildExtends<ICubeTextureAssetTaskProps>(null);