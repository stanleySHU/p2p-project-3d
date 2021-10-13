import { ImageAssetTask as BabylonImageAssetTask } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type IImageAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    url: string
};
export type IImageAssetTaskProps = IImageAssetTaskInitial<BabylonImageAssetTask>;

function ImageAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & IImageAssetTaskProps) => {
        const { init, name, url } = props;

        useLayoutEffect(() => {
            let obj = new BabylonImageAssetTask(name, url);
            init!(obj);
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageAssetTaskHOC(e));
}

export const P2PImageAssetTask = buildExtends<IImageAssetTaskProps>(null);