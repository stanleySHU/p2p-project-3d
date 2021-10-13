import { TextureAssetTask as BabylonTextureAssetTask } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type ITextureAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    url: string, 
    noMipmap?: boolean, 
    invertY?: boolean, 
    samplingMode?: number
};
export type ITextureAssetTaskProps = ITextureAssetTaskInitial<BabylonTextureAssetTask>;

function TextureAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & ITextureAssetTaskProps) => {
        const { init, name, url, noMipmap, invertY, samplingMode } = props;

        useLayoutEffect(() => {
            let obj = new BabylonTextureAssetTask(name, url, noMipmap, invertY, samplingMode);
            init!(obj);
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TextureAssetTaskHOC(e));
}

export const P2PTextureAssetTask = buildExtends<ITextureAssetTaskProps>(null);