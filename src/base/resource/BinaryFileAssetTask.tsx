import { BinaryFileAssetTask as BabylonBinaryFileAssetTask } from '@babylonjs/core';
import React, { useEffect, useLayoutEffect } from 'react';
import { IAbstractAssetTaskProps, buildExtends as _buildExtends } from './AbstractAssetTask';

export type IBinaryFileAssetTaskInitial<T> = IAbstractAssetTaskProps<T> & {
    name: string,
    url: string
};
export type IBinaryFileAssetTaskProps = IBinaryFileAssetTaskInitial<BabylonBinaryFileAssetTask>;

function BinaryFileAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & IBinaryFileAssetTaskProps) => {
        const { init, name, url } = props;

        useLayoutEffect(() => {
            let obj = new BabylonBinaryFileAssetTask(name, url);
            init!(obj);
        }, []);
        return <EL {...props}/>
    };
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(BinaryFileAssetTaskHOC(e));
}

export const P2PBinaryFileAssetTask = buildExtends<IBinaryFileAssetTaskProps>(null);