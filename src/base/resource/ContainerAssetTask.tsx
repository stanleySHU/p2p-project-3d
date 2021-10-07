import { ContainerAssetTask as BabylonContainerAssetTask } from '@babylonjs/core';
import React, { useEffect } from 'react';
import { ChildHOC } from '../Component';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type IContainerAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    meshesNames: any, 
    rootUrl: string, 
    sceneFilename: string | File
};
export type IContainerAssetTaskProps = IContainerAssetTaskInitial<BabylonContainerAssetTask>;

function ContainerAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & IContainerAssetTaskProps) => {
        const { name, instance, meshesNames, rootUrl, sceneFilename } = props;

        useEffect(() => {
            if (instance && !instance.current) {
                instance.current = new BabylonContainerAssetTask(name, meshesNames, rootUrl, sceneFilename );
            }
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ContainerAssetTaskHOC(e));
}

export const P2PContainerAssetTask = buildExtends<IContainerAssetTaskProps>(ChildHOC(null));