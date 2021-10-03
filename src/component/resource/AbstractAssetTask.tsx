import { AbstractAssetTask as BabylonAbstractAssetTask } from '@babylonjs/core';
import React from 'react';
import { IComponentProps, buildExtends as _buildExtends } from '../Component';

export type IAbstractAssetTaskProps<T> = IComponentProps<T> & {};

function AbstractAssetTaskHOC<T>(EL: React.FC<T>) {
    return (props: T & IAbstractAssetTaskProps<BabylonAbstractAssetTask>) => {
        return <EL {...props}/>
    }
}

export function buildExtends<T>(e: any) {
    return _buildExtends<T>(AbstractAssetTaskHOC(e));
}