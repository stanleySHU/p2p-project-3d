import { ContainerAssetTask as BabylonContainerAssetTask } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
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
        const { init, name, meshesNames, rootUrl, sceneFilename } = props;

        useLayoutEffect(() => {
            let obj = new BabylonContainerAssetTask(name, meshesNames, rootUrl, sceneFilename );
            init!(obj);
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(ContainerAssetTaskHOC(e));
}

export const P2PContainerAssetTask = buildExtends<IContainerAssetTaskProps>(null);