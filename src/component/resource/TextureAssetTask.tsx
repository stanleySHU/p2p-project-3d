import { TextureAssetTask as BabylonTextureAssetTask } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
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
        const { name, instance, url, noMipmap, invertY, samplingMode } = props;

        useEffect(() => {
            console.log(`TextureAssetTask ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonTextureAssetTask(name, url, noMipmap, invertY, samplingMode);
                console.log(`TextureAssetTask ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(TextureAssetTaskHOC(e));
}

export const P2PTextureAssetTask = buildExtends<ITextureAssetTaskProps>(ChildHOC(null));