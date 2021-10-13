import { MeshAssetTask as BabylonMeshAssetTask } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type IMeshAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    meshesNames: any, 
    rootUrl: string, 
    sceneFilename: string | File
};
export type IMeshAssetTaskProps = IMeshAssetTaskInitial<BabylonMeshAssetTask>;

function MeshAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & IMeshAssetTaskProps) => {
        const { init, name, meshesNames, rootUrl, sceneFilename } = props;

        useLayoutEffect(() => {
            let obj = new BabylonMeshAssetTask(name, meshesNames, rootUrl, sceneFilename);
            init!(obj);
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(MeshAssetTaskHOC(e));
}

export const P2PMeshAssetTask = buildExtends<IMeshAssetTaskProps>(null);