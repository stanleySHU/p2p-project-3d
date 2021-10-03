import { ImageAssetTask as BabylonImageAssetTask } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type IImageAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    url: string
};
export type IImageAssetTaskProps = IImageAssetTaskInitial<BabylonImageAssetTask>;

function ImageAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & IImageAssetTaskProps) => {
        const { name, instance, url } = props;

        useEffect(() => {
            console.log(`ImageAssetTask ${name} called`);
            if (instance && !instance.current) {
                instance.current = new BabylonImageAssetTask(name, url);
                console.log(`ImageAssetTask ${name} created`);
            }
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ImageAssetTaskHOC(e));
}

export const P2PImageAssetTask = buildExtends<IImageAssetTaskProps>(ChildHOC(null));